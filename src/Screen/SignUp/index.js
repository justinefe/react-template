import React from "react";
import SignUpForm from "./SignUpForm";
import NaBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import BreadCum from "../../Component/Breadcrum";

const SignUp = () => {
  return (
    <div>
      <NaBar />
      <BreadCum />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default SignUp;
