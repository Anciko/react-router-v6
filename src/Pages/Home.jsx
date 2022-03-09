import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  let {pathname, search} = useLocation();
  let navigate = useNavigate();
  return (
    <div>
      <h1>I am Home Page and pathname is {pathname} and you search {search}  </h1>
      <button className="btn btn-warning btn-sm" onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

export default Home;
