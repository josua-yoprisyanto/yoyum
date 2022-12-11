import React, { useState } from "react";
import CanteenUIB from "../assets/images/CanteenUIB.jpg";
import "../assets/css/signIn.css";
import { login } from "../axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await login({
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <div className="sign-in-wrapper">
          <h1 className="sign-in-title">
            <span className="text-blue">SIGN</span>
            <span className="text-yellow"> IN</span>
          </h1>
          <form className="sign-in-form" onSubmit={handleLogin}>
            <input
              className="email-input"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="stay-sign-in">
              <input type="checkbox" id="staySignIn" />
              <label for="staySignIn">stay sign in</label>
            </div>
            <button
              className="submit-button"
              value="SUBMIT"
              onClick={handleLogin}
            >
              Submit
            </button>
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
