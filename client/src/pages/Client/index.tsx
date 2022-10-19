import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { JobForm } from '../../components';

function Client() {
  const { id } = useParams();
  const [showModel, setShowModel] = useState(false);
  const handleOpen = () => setShowModel(true);
  const handleClose = () => setShowModel(false);
  return (
    <div>
      <h1>
        client
        {id}
      </h1>
      <Button onClick={handleOpen}>Open modal</Button>
      <JobForm showModel={showModel} handelClose={handleClose} />
    </div>
  );
}

export default Client;
