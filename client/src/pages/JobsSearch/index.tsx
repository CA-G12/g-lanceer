import { useState } from 'react';
import { JobCard, Filter } from '../../components';

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
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const changeCategory: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCategory(e.target.value);
  };
  const priceChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPrice(Number(e.target.value));
  };
  // console.log(category);
  // console.log(price);
  return (
    <div>
      <JobCard job={job} />
      <Filter
        category={category}
        changeCategory={changeCategory}
        priceChange={priceChange}
        price={price}
      />
    </div>
  );
}

export default JobsSearch;
