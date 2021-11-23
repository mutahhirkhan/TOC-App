import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../../Redux/authRedux/authActions";
import { TextField } from "@material-ui/core";
import Button from "../Button/Button";
import "./SigninForm.css";

const SigninForm = ({ signin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      email,
      password,
    };
    signin(cred);

    console.log(email, password);
  };

  return (
    <form className="signin-form" onSubmit={handleFormSubmit} type="submit">
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
      <Button type="submit" style={{ marginTop: "2em", width: "70%" }}>Sign in</Button>
      {/* <input onChange={(e) => setemail(e.target.value)} value={email} type="text" placeholder="email"></input>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="text" placeholder="password"></input>
                    <button type="submit">submit</button> */}
    </form>
  );
};

var actions = {
  signin,
};

export default connect(null, actions)(SigninForm);
