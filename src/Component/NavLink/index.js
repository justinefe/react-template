import React from "react";
import "./index.scss";

const index = ({ to, name, className }) => {
  return (
    <a className={className} href={`${to}`}>
      {name}
    </a>
  );
};

export default index;
