import { Link } from 'react-router-dom';
import './style.css';

function ErrorNotFound() {
  return (
    <div className="error-container">
      <div className="container">
        <h1 className="title">404</h1>
        <p className="description">
          The page you were looking for could not be found. The page could be
          removed or you missbled the word while searching for it.
        </p>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default ErrorNotFound;
