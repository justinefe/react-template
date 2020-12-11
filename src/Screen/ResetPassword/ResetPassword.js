import React, { useState } from "react";
import Input from "../../Component/Input";

import "./index.scss";

// console.log("==============>", "./index.scss");
const ResetPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const onChange = (event, error) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className='sign-up'>
      <div>
        <span>Enter your mail here</span>
      </div>
      <form>
        <Input
          type='email'
          placeHolder='Enter email'
          required
          name='email'
          id='email'
          handleChange={onChange}
          label='Email'
          className='in-put'
          value={values.email}
          errorMsg='Must be a valid mail'
        />
        <Input
          type='submit'
          required
          className='in-put'
          name='confirm_password'
          id='confirm_password'
          handleChange={onChange}
          label=''
          value='Send'
        />
      </form>
    </div>
  );
};

export default ResetPassword;
/**
 *     // {inputArray.map((individualInput) => (
        //   <Input
        //     key={individualInput.placeHolder}
        //     type={individualInput.type}
        //     placeHolder={individualInput.placeHolder}
        //     required
        //     name={individualInput.name}
        //     id={individualInput.id}
        //     handleChange={onChange}
        //     label={individualInput.label}
        //     value={values.name}
        //     className='in-put'
        //     errorMsg={individualInput.errorMsg}
        //     revielPassword={
        //       individualInput.name === "confirm_password" || "password"
        //         ? revielPassword
        //         : false
        //     }
        //   />
        // ))}
         const inputArray = [
    {
      type: "text",
      placeHolder: "Enter full name",
      name: "fullName",
      id: "fullName",
      label: "Full Name",
      errorMsg: "Must be first name and last name",
    },
    {
      type: "email",
      placeHolder: "Enter email",
      name: "email",
      id: "email",
      label: "Email",
      errorMsg: "Must be a valid mail",
    },
    {
      type: pastype ? "password" : "text",
      placeHolder: "Enter password",
      name: "password",
      id: "password",
      label: "Password",
      errorMsg: "Must have alphanumeral and special characters",
    },
    {
      type: pastype ? "password" : "text",
      placeHolder: "Confirm password",
      name: "confirm_password",
      id: "confirm_password",
      label: "Confirm password",
      errorMsg: "Must have alphanumeral and special characters",
    },
    {
      type: "submit",
      name: "Sign up",
      id: "Sign Up",
      label: "",
      errorMsg: " ",
    },
  ];
 * 
 *  
 */
