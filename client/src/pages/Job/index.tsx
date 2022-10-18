import JobDetails from '../../components/jobDetails';

interface JobAbout {
  category: string,
  duration: string,
  budget: number
}

const job: JobAbout = {
  category: 'Design',
  duration: '2day',
  budget: 20,
};

function Job() {
  return (
    <JobDetails job={job} />
  );
}

export default Job;
