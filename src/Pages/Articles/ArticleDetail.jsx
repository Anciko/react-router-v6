import React from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const {id} = useParams();
 
  return (
    <div>
      <h1>I am Article Detail and id is {id}</h1>
    </div>
  );
}

export default ArticleDetail;
