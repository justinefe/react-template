import React from "react";
import DashIntr from "./DashIntro";
import Input from "../../Component/Input";

import "./index.scss";

const MyAccount = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Account Details' />
      <div className='bill'>
        <Input
          type='text'
          required
          className='upon'
          name='postcode_zip'
          id='postcode_zip'
          placeHolder='First Name'
        />
        <Input
          type='text'
          required
          className='upon'
          name='phone'
          id='phone'
          placeHolder='Last Name'
        />
      </div>{" "}
      <Input
        type='text'
        required
        className='upon'
        name='street_address'
        id='street_address'
        placeHolder='Display Name'
      />
      <Input
        type='text'
        required
        className='upon'
        name='apartment'
        id='apartment'
        placeHolder='Email Address'
      />
      <div className='pchan'>
        <span>Password Change</span>
      </div>{" "}
      <Input
        type='text'
        required
        className='upon'
        name='apartment'
        id='apartment'
        placeHolder='Current Password'
      />{" "}
      <div className='bill'>
        <Input
          type='text'
          required
          className='upon'
          name='postcode_zip'
          id='postcode_zip'
          placeHolder='New Password'
        />
        <Input
          type='text'
          required
          className='upon'
          name='phone'
          id='phone'
          placeHolder='Confirm Password'
        />
      </div>{" "}
      <button className='address-btn'>Save Changes</button>
    </div>
  );
};

export default MyAccount;
