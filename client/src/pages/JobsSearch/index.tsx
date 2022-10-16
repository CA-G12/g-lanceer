import { Tabs, JobCard } from '../../components';

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

interface TabListInt {
  label: string;
  child: JSX.Element;
}

const tablist: Array<TabListInt> = [{
  label: 'Most Popular',
  child: <JobCard job={job} />,
},
{ label: 'Best Match', child: <h1>hhhhhhhh</h1> }];

function JobsSearch() {
  return (
    <div>
      <Tabs tablist={tablist} />
    </div>
  );
}

export default JobsSearch;
