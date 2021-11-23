import React from "react";
import { connect } from "react-redux";
import { googleSignin } from "../../Redux/authRedux/authActions";

const GoogleSignin = ({ googleSignin }) => {
  return (
    <div>
      <button onClick={googleSignin}>signi in with google</button>
    </div>
  );
};

var actions = {
  googleSignin,
};

export default connect(null, actions)(GoogleSignin);
