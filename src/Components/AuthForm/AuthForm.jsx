import React, { useState } from "react";
import "./AuthForm.css";
import Button from "./../Button/Button";
import SigninForm from "./../SigninForm/SigninForm";
import SignupForm from "./../SignupForm/SignupForm";
import { connect } from 'react-redux';
import {googleSignin} from "./../../Redux/authRedux/authActions"

const AuthForm = ({googleSignin}) => {
  const [switcherValue, setSwitcherValue] = useState("signin");
  return (
    <div className="auth-form">
      <div className="auth-switcher">
        <Button 
        onClick={() => setSwitcherValue('signin')}
            style={{ position: "relative" }} background="none" color="black">
          Signin
           {switcherValue === "signin" ? <div className="underline"></div>: null} 
        </Button>
        <div className="e-logo-wrapper flex">
          <img src={require("./../../Assests/icons/e-black.png").default} className="e-black-logo"  />
        </div>
        <Button
        onClick={() => setSwitcherValue('signup')}
          style={{ position: "relative", justifySelf: "end" }}
          background="none" color="black"
        >
          SignUp
          {switcherValue === "signup" ? <div className="underline"></div>: null} 
        </Button>
      </div>
      <div className="auth-fields center">
          {switcherValue === 'signin' ? <SigninForm/> : <SignupForm/>}
      </div>
      <div className="auth-form-btn">
        <div className="or-separator">OR</div>
        <Button onClick={googleSignin} style={{ marginTop: "2em", width: "70%" }}>
          Signin with Google
        </Button>
      </div>
    </div>
  );
};

var actions = {
    googleSignin
}

export default connect(null, actions)(AuthForm);
 