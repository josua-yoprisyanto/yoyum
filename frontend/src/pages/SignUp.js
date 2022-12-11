import React from "react";
import CanteenUIB from "../assets/images/CanteenUIB.jpg";
import "../assets/css/signIn.css";
import "../assets/css/signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const SignUp = () => {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <div className="sign-in-wrapper">
          <h1 className="sign-in-title">
            <span className="text-blue">SIGN</span>
            <span className="text-yellow"> UP</span>
          </h1>
          <form className="sign-in-form">
            <div className="sign-up-input-container">
              <div className="sign-up-input-wrapper">
                <div className="sign-up-page-1">
                  <input className="email-input" type="text" placeholder="email" />
                  <input className="password-input" type="password" placeholder="password" />
                  <input className="password-input" type="password" placeholder="confirm password" />
                  <label className="next-button" for="next-checkbox">
                    <span>NEXT</span>
                  </label>
                  <input type="checkbox" id="next-checkbox" />
                </div>
                <div className="sign-up-page-2">
                  <input className="stan-name-input" type="text" placeholder="stan name" />
                  <input className="phone-number-input" type="number" placeholder="phone number" />
                  <label for="next-checkbox" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </label>
                  <input className="submit-button" type="submit" value="SUBMIT" />
                </div>
              </div>
            </div>
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

export default SignUp;
