import React from "react";
import { signout } from "../../Redux/authRedux/authActions";
import { connect } from 'react-redux';

const Signout = ({ signout }) => {
  return (
    <div>
      <button onClick={signout}>Sign Out    </button>
    </div>
  );
};

var actions = {
  signout,
};

export default connect(null, actions)(Signout);
