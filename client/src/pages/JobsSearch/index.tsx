import { useState } from 'react';
import { Tabs, JobCard, Filter } from '../../components';

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
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const changeCategory: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCategory(e.target.value);
  };
  const priceChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(Number(e.target.value));
  };
  return (
    <div>
      <JobCard job={job} />
      <Filter
        category={category}
        changeCategory={changeCategory}
        priceChange={priceChange}
        price={price}
      />
      <Tabs tablist={tablist} />
    </div>
  );
}

export default JobsSearch;
