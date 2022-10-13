import { useParams } from 'react-router-dom';

function Job() {
  const { id } = useParams();
  return (
    <h1>
      job
      {id}
    </h1>
  );
}

export default Job;
