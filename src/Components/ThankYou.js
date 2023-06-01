import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>
          Thank you for your reservation we are looking forward to serve you
        </h1>
        <Link to="/">→Back to Homepage</Link>
      </main>
    </>
  );
};

export default ThankYou;
