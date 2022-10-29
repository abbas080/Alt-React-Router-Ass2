import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>404 Page</h1>
      <h2 className="err-text">Sorry!</h2>
      <p className="err-text">That page cannot be found</p>
      <Link to="/" className="err-text">
        Back to the HomePage...
      </Link>
    </div>
  );
};

export default ErrorPage;
