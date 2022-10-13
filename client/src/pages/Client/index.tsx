import { useParams } from 'react-router-dom';

function Client() {
  const { id } = useParams();
  return (
    <h1>
      client
      {id}
    </h1>
  );
}

export default Client;
