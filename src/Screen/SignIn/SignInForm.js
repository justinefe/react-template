import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { signInAction, cleanUpAuth } from "./action";
import { useParams, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
// import Loader from "react-loader-spinner";
import Loader from "../../Component/Load";
import Input from "../../Component/Input";
import "./index.scss";
import NavLink from "../../Component/NavLink";

const SignUpForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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

  const onChange = (event, err) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const revielPassword = () => {
    setPastype(!pastype);
  };

  useEffect(() => {
    if (error) {
      addToast(`${error}`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (error === null && completed) {
      addToast("Sign in successful", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/");
    }
    return async () => await dispatch(cleanUpAuth());
  }, [dispatch, completed, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signInAction(values));
  };

  return (
    <div className='sign-up'>
      <div>
        <span>Sign In</span>
      </div>
      <form onSubmit={handleSubmit}>
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
          errorMsg='Password must contain at least one number, uppercase and lowercase letter'
        />
        <NavLink to='/reset-password' name='forgot password?' className='mn' />
        <button className='submit-btn'>
          {loading ? <Loader size={7} ma={0} color='white' /> : "Sign In"}
        </button>
      </form>
      <div>
        <span>
          Don't have an account?{" "}
          <NavLink to='/sign-up' name='Sign Up' className='mm' />
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
