import React, { useRef, useState } from "react";
import CanteenUIB from "../assets/images/CanteenUIB.jpg";
import "../assets/css/signIn.css";
import "../assets/css/signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { checkPassword } from "../utils/checkPassword";
import { Form } from "react-bootstrap";
import { createStand } from "../axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const checkBoxRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stanName, setStanName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();

  console.log(image);
  const [alertText, setAlertText] = useState(
    "Hint: to make password stronger. use upper and lower case letters, number, and symbols."
  );
  const passwordAlertClass = () => {
    if (
      alertText ===
      "Hint: to make password stronger. use upper and lower case letters, number, and symbols."
    )
      return "sign-up-password-alert";
    if (alertText === "Strong") return "sign-up-password-alert green-alert";
    if (alertText === "Weak: Password must be at least 8 characters long")
      return "sign-up-password-alert red-alert";
    return "sign-up-password-alert yellow-alert";
  };

  const nextHandle = (e) => {
    const checkPasswordValue = checkPassword(password, confirmPassword);
    setAlertText(checkPasswordValue);
    e.preventDefault();
    if (password === confirmPassword && checkPasswordValue === "Strong") {
      checkBoxRef.current.checked = true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("name", stanName);
    formData.append("number", phoneNumber);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("img", image);

    await createStand({ formData });
    navigate("/admin/dashboard");
  };

  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <div className="sign-in-wrapper">
          <h1 className="sign-in-title">
            <span className="text-blue">SIGN</span>
            <span className="text-yellow"> UP</span>
          </h1>
          <div className="sign-in-form">
            <div className="sign-up-input-container">
              <div className="sign-up-input-wrapper">
                <form className="sign-up-page-1" onSubmit={nextHandle}>
                  <input
                    className="email-input"
                    type="text"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="password-input"
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="password-input"
                    type="password"
                    placeholder="confirm password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <Form.Label>Stand Image :</Form.Label>
                  <Form.Control
                    type="file"
                    className="mb-3"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />

                  <div className={passwordAlertClass(setConfirmPassword)}>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    <span>{alertText}</span>
                  </div>
                  <input className="submit-button" type="submit" value="NEXT" />
                </form>
                <form className="sign-up-page-2">
                  <input
                    className="stan-name-input"
                    type="text"
                    placeholder="stan name"
                    required
                    value={stanName}
                    onChange={(e) => setStanName(e.target.value)}
                  />

                  <input
                    className="phone-number-input"
                    type="number"
                    placeholder="phone number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <input
                      type="checkbox"
                      className="next-checkbox"
                      ref={checkBoxRef}
                    />
                  </label>
                  <button
                    className="submit-button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
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
