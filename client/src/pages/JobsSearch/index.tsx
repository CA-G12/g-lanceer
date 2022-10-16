import { JobCard } from '../../components';

interface Job {
  title: string,
  description: string,
  budget: number
}

const job: Job = {
  title: 'Graphic Design',
  description: 'Lorem lorem lorem lorem lorem lorem lorem lorem',
  budget: 20,
};

function JobsSearch() {
  return (
    <div>
      <JobCard job={job} />
    </div>
  );
}

export default JobsSearch;
