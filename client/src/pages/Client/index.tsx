import { useEffect, useState } from 'react';
import {
  Button, Accordion, AccordionSummary, AccordionDetails, CircularProgress, Snackbar, Alert, Stack,
} from '@mui/material';
import axios from 'axios';
import { JobCard, JobForm, Tabs } from '../../components';
import ProposalJob from '../../components/proposalJob/index';
import {
  JobSearch, TabListInt,
} from '../../interfaces';
import './style.css';

function Client() {
  const [showModel, setShowModel] = useState(false);
  const handleOpen = () => setShowModel(true);
  const handleClose = () => setShowModel(false);
  const [message, setMessage] = useState('');
  const [accept, setAccept] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobsUnoccupied, setJobsUnoccupied] = useState<JobSearch[]>([]);
  const [jobsOccupied, setJobsOccupied] = useState<JobSearch[]>([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('/api/v1/client');
        setLoading(false);
        const { unOccupiedJobs } = data.data;
        const { occupiedJobs } = data.data;
        setJobsUnoccupied(unOccupiedJobs); // job isOccupied = fasle
        setJobsOccupied(occupiedJobs); // // job isOccupied = true
      } catch (err) {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // fun delete item
  const handleDelete = async (idItem: number) => {
    try {
      const dataItemDel = await axios.delete(`/api/v1/jobs/${idItem}`);
      setMessage(dataItemDel.data.msg);
      const filterJobsDelete = jobsUnoccupied.filter((job) => job.id !== idItem);
      setJobsUnoccupied(filterJobsDelete);
    } catch (err) {
      setLoading(false);
    }
    setOpenAlert(true);
  };

  // fun Accipt proposal
  const acceptPropsal = async (proposalID: number, jobID: number) => {
    try {
      const getProposalItem = await axios.patch(`/api/v1/proposals/${proposalID}`);

      setAccept(getProposalItem.data.msg);
      const jobAccepted = jobsUnoccupied.find((job) => job.id === jobID);
      if (jobAccepted) {
        const filterProposal = jobsUnoccupied.filter((job) => job.id !== jobID);
        setJobsUnoccupied(filterProposal);
        setJobsOccupied([...jobsOccupied, jobAccepted]);
      }
    } catch (err) {
      setLoading(false);
    }
    setOpenAlert(true);
  };

  // pending jobs for most jobs
  let pendingJobs: React.ReactElement | null = null;

  // accepted jobs for most jobs
  let acceptedJobs: React.ReactElement | null = null;
  // component while rendering data

  if (loading) {
    pendingJobs = (
      <div className="spinner">
        <CircularProgress color="inherit" />
        {' '}
      </div>
    );
  }

  if (!jobsUnoccupied.length) { // pending jobs for most jobs
    pendingJobs = <h2>No jobs found</h2>;
  } else {
    pendingJobs = (
      // component while rendering data on pending jobs
      <>
        {jobsUnoccupied.map((job) => (
          <JobCard job={job} deleteItem={handleDelete} key={job.title}>
            <Accordion disabled={false}>
              <AccordionSummary>
                <div className="budget-proposal-section budget-proposal-client ">
                  <div className="proposals">
                    proposals:
                    <span>
                      {job.proposals.length}
                    </span>
                  </div>
                  <div className="budget">
                    budget:
                    <span>
                      $
                      {job.budget}
                    </span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {job.proposals.map((proposal) => <ProposalJob proposal={proposal} acceptProposal={acceptPropsal} />)}

              </AccordionDetails>
            </Accordion>

          </JobCard>
        ))}
      </>
    );
  }

  if (!jobsOccupied.length) { // accepted jobs for most jobs
    acceptedJobs = <h2>No jobs found</h2>;
  } else {
    acceptedJobs = (
      // component while rendering data on accepted jobs
      <>
        {jobsOccupied.map((job) => (
          <JobCard job={job} deleteItem={handleDelete} key={job.title}>
            <Accordion disabled={false}>
              <AccordionSummary>
                <div className="budget-proposal-section budget-proposal-client ">
                  <div className="proposals">
                    proposals:
                    <span>
                      {job.proposals.length}
                    </span>
                  </div>
                  <div className="budget">
                    budget:
                    <span>
                      $
                      {job.budget}
                    </span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {job.proposals.map((proposal) => <ProposalJob proposal={proposal} acceptProposal={acceptPropsal} />)}
              </AccordionDetails>
            </Accordion>

          </JobCard>
        ))}
      </>
    );
  }
  const tablist: Array<TabListInt> = [{
    label: 'Pending',
    child: pendingJobs,
  },
  { label: 'Accepted', child: acceptedJobs }];
  return (
    <div className="client-pro container">
      <div className="btn-table">
        <Button
          onClick={handleOpen}
          style={{
            fontSize: '12px',
            borderRadius: '9px',
            backgroundColor: '#132754',
            color: '#fff',
            width: '6%',
            margin: '7px',
          }}
        >
          Add

        </Button>
      </div>
      <JobForm showModel={showModel} handelClose={handleClose} />
      <Tabs tablist={tablist} />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          autoHideDuration={6000}
        >
          <Alert severity="success">
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          autoHideDuration={6000}
        >
          <Alert severity="success">
            {accept}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}

export default Client;
