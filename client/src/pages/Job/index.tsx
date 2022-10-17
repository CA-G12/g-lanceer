import { useParams } from 'react-router-dom';
import ProposalForm from '../../components/ProposalForm';

function Job() {
  const { id } = useParams();
  return (
    <>
      <h1>
        job
        {id}
      </h1>
      <ProposalForm />

    </>
  );
}

export default Job;
