import React from "react";
import {useNavigate} from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>I am About Page</h1>
      <button className="btn btn-warning btn-sm" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}
export default About;