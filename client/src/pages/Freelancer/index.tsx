import { useParams } from 'react-router-dom';

function Freelancer() {
  const { id } = useParams();
  return (
    <h1>
      freelancer
      {id}
    </h1>
  );
}

export default Freelancer;
