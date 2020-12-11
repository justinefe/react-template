import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, cleanUpAuth } from "./action";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
// import Loader from "react-loader-spinner";
import Loader from "../../Component/Load";
import Input from "../../Component/Input";
import "./index.scss";
import NavLink from "../../Component/NavLink";

const SignUpForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    password: "",
    email: "",
    confirm_password: "",
    phoneNumber: "",
  });
  const { addToast } = useToasts();

  const [pastype, setPastype] = useState(true);

  const dispatch = useDispatch();
  let history = useHistory();

  const loading = useSelector(({ AuthReducer: { isLoading } }) => isLoading);
  const error = useSelector(({ AuthReducer: { error } }) => error);
  const completed = useSelector(
    ({ AuthReducer: { isCompleted } }) => isCompleted
  );

  useEffect(() => {
    if (error) {
      addToast(`${error}`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (error === null && completed) {
      addToast("Sign up successful", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/");
    }
    return async () => await dispatch(cleanUpAuth());
  }, [dispatch, completed, error]);

  const onChange = (event, err) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirm_password) {
      addToast("Password and confirm password must match", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const { fullName, password, email, phoneNumber } = values;
    await dispatch(signUpAction({ fullName, password, email, phoneNumber }));
  };

  const revielPassword = () => {
    setPastype(!pastype);
  };

  return (
    <div className='sign-up'>
      <div>
        <span>Sign Up</span>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeHolder='Enter full name'
          required
          name='fullName'
          id='fullName'
          handleChange={onChange}
          label='Full Name'
          value={values.fullName}
          className='in-put'
          pattern='^(\w.+\s).+$'
          errorMsg='Fullname must have atleast first and last name'
        />
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
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
        />
        <Input
          type={pastype ? "password" : "text"}
          placeHolder='Enter password'
          required
          name='password'
          id='password'
          revielPassword={revielPassword}
          handleChange={onChange}
          label='Password'
          className='in-put'
          value={values.password}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,}'
          errorMsg='Password must contain at least one number, one uppercase and one lowercase letter'
        />
        <Input
          type={pastype ? "password" : "text"}
          placeHolder='Confirm password'
          required
          revielPassword={revielPassword}
          className='in-put'
          name='confirm_password'
          id='confirm_password'
          handleChange={onChange}
          label='Confirm password'
          value={values.confirm_password}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,}'
          errorMsg='Password must contain at least one number, one uppercase and one lowercase letter'
        />
        <Input
          type='text'
          placeHolder='Phone number'
          required
          className='in-put'
          name='phoneNumber'
          id='phoneNumber'
          handleChange={onChange}
          label='Phone number'
          errorMsg='Phone number must be valid'
          pattern='^[-+]?[0-9]+$'
        />
        <button className='submit-btn'>
          {loading ? <Loader size={7} ma={0} color='white' /> : "Sign Up"}
        </button>
      </form>
      <div>
        <span>
          Already have an account?{" "}
          <NavLink to='/sign-in' name='Sign In' className='mm' />
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
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
