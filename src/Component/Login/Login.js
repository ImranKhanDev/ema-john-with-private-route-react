import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-form">
      <div>
        <form onSubmit={submitHandler}>
          <h2>Please Login First</h2>
         
          <br />
          <input type="email" placeholder="email" />
          <br /> <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="submit" value="Submit" />
          <br />
          <p>
            New to ema-john ?
            <br />
            <Link to="/register">Create Account</Link>
          </p>
          <div>----------or-------------</div>
          <button className="btn-regular" onClick={signInWithGoogle}>
            Google Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
