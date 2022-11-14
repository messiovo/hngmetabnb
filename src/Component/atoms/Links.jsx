import React, { useState } from "react";
import { Link } from "react-router-dom";

const Links = ({ text, to }) => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Link
      to={to}
      key={text}
      className="text-base hover:text-dark"
      onClick={() => {
        setIsMobile(!isMobile);
      }}
    >
      {text}
    </Link>
  );
};

export default Links;
