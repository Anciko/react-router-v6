import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ArticleDetail from "./Articles/ArticleDetail";

function MainRouter() {
    return (
      <div>
        <Link to="/" className="btn btn-info btn-sm">
          Home
        </Link>
        |
        <Link to="/about" className="btn btn-info btn-sm">
          About
        </Link>
        |
        <Link to="/article/3" className="btn btn-success btn-sm">
            Article    
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={ <ArticleDetail /> } />
        </Routes>
      </div>
    );
  
}

export default MainRouter;
