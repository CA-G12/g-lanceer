import { useParams } from 'react-router-dom';
import { JobForm } from '../../components';

function Client() {
  const { id } = useParams();
  return (
    <div>
      <h1>
        client
        {id}
      </h1>
      <JobForm />
    </div>
  );
}

export default Client;
