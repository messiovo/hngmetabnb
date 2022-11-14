import React from "react";
import { Link } from "react-router-dom";

const Links = ({ text, to }) => {


  return (
    <Link to={to} key={text} className="text-base" >
      {text}
    </Link>
  );
};

export default Links;
