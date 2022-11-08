import { Button } from '@mui/material';
import './style.css';

interface Propos {
  label: string
  onClick: any
}
function GoogleLoginBtn({ label, onClick }: Propos) {
  return (
    <Button className="google-btn" style={{ margin: '1.5rem auto' }} onClick={onClick}>
      {' '}
      <img
        className="google-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="btn"
      />
      <p className="btn-text">
        <b>
          {label}
          {' '}
          with google
        </b>
      </p>

    </Button>
  );
}

export default GoogleLoginBtn;
