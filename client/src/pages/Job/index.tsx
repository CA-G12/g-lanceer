import JobDetails from '../../components/jobDetails';
import ProposalForm from '../../components/ProposalForm';
import { JobAbout } from '../../interfaces';

const job: JobAbout = {
  title: 'Graphic Designer',
  description: `Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Doloribus deserunt provident
          adipisci dignissimos aliquid, enim nesciunt.`,
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
