import { useEffect, useState } from 'react';
import {
  Button, Accordion, AccordionSummary, AccordionDetails, CircularProgress,
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
          <JobCard job={job} key={job.title}>
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
                {job.proposals.map((proposal) => <ProposalJob proposal={proposal} />)}

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
          <JobCard job={job} key={job.title}>
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
                {job.proposals.map((proposal) => <ProposalJob proposal={proposal} />)}

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
    </div>
  );
}

export default Client;
