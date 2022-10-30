import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import './style.css';
import { Client, JobAboutPage, ProposalProps } from '../../interfaces';
import { JobDetails, ProposalForm } from '../../components';
import { addProposal } from '../../helpers';

function Job() {
  const { id } = useParams();
  const [jobState, setJob] = useState<JobAboutPage>({
    time: '',
    title: '',
    description: '',
    category: '',
    budget: 0,
    user: {
      name: '', email: '', userID: 0, role: '',
    },
  });
  const [client, setClient] = useState<Client>({
    name: '', email: '', id: 0, role: '',
  });
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState(false);
  const [apiError, setApiError] = useState(false);
  const onSubmit = async (values: ProposalProps) => {
    setApiError(false);
    setApiResponse(false);
    try {
      await addProposal(values, id);
      setApiResponse(true);
    } catch (err) {
      setApiError(true);
    }
  };
  useEffect(() => {
    const getJobData = async () => {
      setLoading(true);
      setError(false);
      try {
        const jobData = await axios.get(`/api/v1/jobs/${id}`);
        setLoading(false);
        setJob(jobData.data.data);
        setClient(jobData.data.data.user);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    getJobData();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <CircularProgress color="inherit" />
        {' '}
      </div>
    );
  }

  if (error) {
    return (
      <h2 className="error-not-found">Job Not Found</h2>
    );
  }

  return (
    <div className="container">
      <JobDetails job={jobState} client={client} />
      <ProposalForm onSubmit={onSubmit} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={apiError}
        onClose={() => setApiError(false)}
        autoHideDuration={6000}
      >
        <Alert severity="error">
          Something went Wrong, Try Again later!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={apiResponse}
        onClose={() => setApiResponse(false)}
        autoHideDuration={6000}
      >
        <Alert severity="success">
          proposal submitted successfully!
        </Alert>
      </Snackbar>
    </div>

  );
}
export default Job;
