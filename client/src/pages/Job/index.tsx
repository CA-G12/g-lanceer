import JobDetails from '../../components/jobDetails';
import ProposalForm from '../../components/ProposalForm';

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
    <div className="container">
      <JobDetails job={job} />
      <ProposalForm />
    </div>
  );
}

export default Job;
