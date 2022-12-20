import React, { useEffect, useRef, useState } from "react";
import "../assets/css/sellerProfilContent.css";
import { stanObject } from "../data/stanObject.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCamera,
  faCookie,
  faMugHot,
  faPen,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
const SellerProfilContent = ({ stand }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(stand?.number);
  const [stanName, setStanName] = useState(stand?.name);
  const [history, setHistory] = useState({});
  const stanNameRef = useRef();
  const editFormHandle = (e) => {
    e.preventDefault();
    setIsEdit(true);
    setHistory({ phoneNumber: phoneNumber, stanName: stanName });
  };
  const cancelFormHandle = (e) => {
    e.preventDefault();
    setIsEdit(false);
    setStanName(history.stanName);
    setPhoneNumber(history.phoneNumber);
  };
  const submitFormHandle = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };
  useEffect(() => {
    stanNameRef.current.focus();
  }, [isEdit]);
  return (
    <div className="content">
      <div className="seller-profil-content">
        <div className="profil-stan-container">
          <div className="active stan-seller-profil">
            <img src={stanObject[1].image} alt="stan" />
            <span>{stand?.name}</span>
          </div>
        </div>
        <div className="profil-menu-info">
          <h2>MENU INFO</h2>
          <div className="total-menu">
            <FontAwesomeIcon icon={faUtensils} size="xl" />
            <h4>
              Total Menu :{" "}
              {stand?.food_items + stand?.drink_items + stand?.other_items}
            </h4>
          </div>
          <div className="foods-total">
            <FontAwesomeIcon icon={faBowlFood} size="xl" />
            <h4>{stand?.food_items}</h4>
          </div>
          <div className="drinks-total">
            <FontAwesomeIcon icon={faMugHot} size="xl" />
            <h4>{stand?.drink_items}</h4>
          </div>
          <div className="others-total">
            <FontAwesomeIcon icon={faCookie} size="xl" />
            <h4>{stand?.other_items}</h4>
          </div>
        </div>
        {console.log(stand)}
        <div className="profil-account">
          <h2>ACCOUNT</h2>
          <div className="stan-image">
            <img src={stanObject[1].image} alt="stan" />
            <label className="change-image">
              <FontAwesomeIcon icon={faCamera} size="xl" />
              <input
                type="file"
                name="myImage"
                accept="image/png,  image/jpeg"
              />
            </label>
          </div>
          <form className="account-info" onSubmit={(e) => submitFormHandle(e)}>
            <table>
              <tr>
                <td>Stan Name</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    value={stanName}
                    onChange={(e) => setStanName(e.target.value)}
                    disabled={!isEdit}
                    ref={stanNameRef}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={!isEdit}
                  />
                </td>
              </tr>
            </table>
            <div className="account-info-button">
              {isEdit ? (
                <>
                  <button
                    onClick={(e) => cancelFormHandle(e)}
                    className="account-info-cancel-button"
                  >
                    cancel
                  </button>
                  <input
                    type="submit"
                    className="account-info-submit-button"
                    value="submit"
                  />
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => editFormHandle(e)}
                    className="account-info-edit-button"
                  >
                    <span>edit</span>
                    <FontAwesomeIcon icon={faPen} size="sm" />
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerProfilContent;
