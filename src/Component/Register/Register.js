import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register-form">
      <div>
        <h2>Register :: Create your account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="your email" />
          <br /> <br />
          <input type="password" placeholder="your password" name="" id="" />
          <br />
          <br />
          <input
            type="password"
            placeholder="Re-enter your password"
            name=""
            id=""
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an account ? <Link to="/login">Sign in</Link>
        </p>
        <button className="btn-regular">Google Sign in</button>
      </div>
    </div>
  );
};

export default Register;
