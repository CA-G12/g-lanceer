import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import './style.css';
import { Client, JobAboutPage } from '../../interfaces';
import { JobDetails, ProposalForm } from '../../components';

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
      <ProposalForm />
    </div>

  );
}
export default Job;
