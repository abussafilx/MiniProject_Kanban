import { Link } from "react-router-dom";
import '../assets/styles/Error404.css'

function Error404() {
  return (
    <div className="error-container">
      <h1 className="error-header">404</h1>
      <p className="error-subheader">Page Not Found</p>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="error-link">Go Back Home</Link>
    </div>
  );
}

export default Error404;
