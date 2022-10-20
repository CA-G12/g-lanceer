import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import JobDetails from '../../components/jobDetails';
import ProposalForm from '../../components/ProposalForm';
import './style.css';

interface JobAbout {
  title: string
  category: string,
  time: string,
  description: string,
  budget: number,
  user: User
}
interface User {
  id: number,
  email: string,
  name: string,
  role: string
}
interface Client {
  email:string,
  id:number,
  name:string,
  role:string,
}

function Job() {
  const { id } = useParams();
  const [jobState, setJob] = useState<JobAbout | []>([]);
  const [client, setClient] = useState<Client | []>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo(0, 500);
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
      <h1>Error Axios</h1>
    );
  }

  return (
    <div className="container">
      <JobDetails job={jobState} client={client} handleClick={handleClick} />
      <ProposalForm />
    </div>

  );
}
export default Job;
