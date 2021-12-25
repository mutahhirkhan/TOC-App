import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../../Redux/authRedux/authActions";
import { TextField } from "@material-ui/core";
import Button from "./../Button/Button";
import "./SignupForm.css"

const SignupForm = ({ signup }) => {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();

    var cred = {
      email,
      fullName,
      password,
    };
    signup(cred);
  };

  return (
    <form className="signup-form" onSubmit={handleFormSubmit} type="submit">
      <TextField
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
        style={{ width: "100%" }}
        className="full-name"
        label="Full Name"
      ></TextField>
      <TextField
        value={email}
        onChange={(e) => setemail(e.target.value)}
        style={{ width: "100%" }}
        className="email"
        label="Email"
      ></TextField>
      <TextField
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        style={{ width: "100%" }}
        className="password"
        label="Password"
      ></TextField>

      <Button type="submit" fontWeight="bold" fontSize={18} style={{ marginTop: "2em", width: "70%", background: '#000' }}>SIGN UP</Button>

      {/* <input onChange={(e) => setfullName(e.target.value)} value={fullName} type="text" placeholder="full name"></input>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="text" placeholder="email"></input>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="text" placeholder="password"></input>
                    <button type="submit">submit</button> */}
    </form>
  );
};

var actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
