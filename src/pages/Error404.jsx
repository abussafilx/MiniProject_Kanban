import { Link } from "react-router-dom";

function Error404() {
    return (
      <div >
        <h1 >404</h1>
        <p >Page Not Found</p>
        <p >
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          >
          Go Back Home
        </Link>
      </div>
    );
  }

export default Error404


