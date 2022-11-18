import React from "react";
import CanteenUIB from "../assets/images/CanteenUIB.jpg";
import "../assets/css/signIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <div className="sign-in-wrapper">
          <h1 className="sign-in-title">
            <span className="text-blue">SIGN</span>
            <span className="text-yellow"> IN</span>
          </h1>
          <form className="sign-in-form">
            <input className="email-input" type="text" placeholder="email" />
            <input className="password-input" type="password" placeholder="password" />
            <div className="stay-sign-in">
              <input type="checkbox" id="staySignIn" />
              <label for="staySignIn">stay sign in</label>
            </div>
            <input className="submit-button" type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
      <div className="background-image">
        <img src={CanteenUIB} alt="Canteen UIB"></img>
        <div className="background-image-gradient"></div>
      </div>
    </div>
  );
};

export default SignIn;
