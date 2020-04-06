import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>NotFound Page</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
