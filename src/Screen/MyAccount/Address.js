import React from "react";
import DashIntr from "./DashIntro";

import "./index.scss";

const MyAccount = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Billing Address' />
      <div className='billAddress'>
        <span>John Doe</span>
        <span>1355 Market St, Suite 900</span>
        <span>San Francisco, CA 94103</span>
        <span>Mobile: (234) 7035688050 </span>
        <button className='address-btn'>Edit Address</button>
      </div>
    </div>
  );
};

export default MyAccount;
