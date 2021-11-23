import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import SigninForm from "../../Components/SigninForm/SigninForm";
import Signout from "../../Components/Signout/Signout";
import GoogleSignin from '../../Components/GoogleSignin/GoogleSignin';
import "./Authentication.css"
import AuthForm from './../../Components/AuthForm/AuthForm';

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="auth-left"></div>
      <div className="auth-right center">
        <AuthForm/>
      </div>
      {/* <h1>Authentication Page</h1>
      <SigninForm />
      <SignupForm />
      <Signout />
      <GoogleSignin/> */}
    </div>
  );
};

export default Authentication;
