import React from "react";
import DashIntr from "./DashIntro";
import AccountWrap from "./AccountWrap";

import "./index.scss";

const MyAccount = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Dashboard' />

      <div className='navWrap'>
        <AccountWrap
          title='ACCOUNT DETAILS'
          action='Change Password'
          para='efejustin32gmail.com'
          subHead='Justin Igugu'
          // title, action, para, subHead
        />
        <AccountWrap
          title='ADDRESS BOOK'
          action='Change your address'
          para='ASABA-Cable point, Delta
      +234 7035688050'
          subHead='Your default shipping address:'
          // title, action, para, subHead
        />
        <AccountWrap
          title='BOOK CLUB'
          action='Change your book club'
          para='Christian book clubs'
          subHead='Your book club is:'
          // title, action, para, subHead
        />
      </div>
    </div>
  );
};

export default MyAccount;
/**
 *   <span>
        Hello, <strong>Alex Tuntuni</strong>
      </span>
      <p>
        From your account dashboard. you can easily check & view your recent
        orders, manage your shipping and billing addresses and edit your
        password and account details.
      </p>
 */
