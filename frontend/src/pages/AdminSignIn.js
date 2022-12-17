import React, { useState } from "react";
import CanteenUIB from "../assets/images/CanteenUIB.jpg";
import "../assets/css/signIn.css";
import { loginAdmin } from "../axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    loginAdmin({
      email: email,
      password: password,
    }).then(({ data }) => {
      if (data.status === "Success") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        navigate("/admin/dashboard");
      } else {
        setError(true);
      }
    });
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
              type="email"
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
          {error && <span className="text-danger">Email / Password Wrong</span>}
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
