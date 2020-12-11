import React from "react";
import DashIntr from "./DashIntro";

import "./index.scss";

const MyAccount = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Payment Method' />
      <div className='payment'></div>
      <span>You Can't Save Your Payment Method Yet</span>
    </div>
  );
};

export default MyAccount;
