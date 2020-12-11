import React from "react";
import "./index.scss";

const AccountWrap = ({ title, action, para, subHead }) => {
  return (
    <div className='AccountWrap'>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{subHead}</span>
        <p>{para}</p>
      </div>
      <div>
        <span>{action}</span>
      </div>
    </div>
  );
};

export default AccountWrap;
