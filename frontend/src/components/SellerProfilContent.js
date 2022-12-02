import React, { useEffect, useRef, useState } from "react";
import "../assets/css/sellerProfilContent.css";
import { stanObject } from "../data/stanObject.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faCamera, faCookie, faMugHot, faUtensils } from "@fortawesome/free-solid-svg-icons";
const SellerProfilContent = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [stanName, setStanName] = useState();
  const stanNameRef = useRef();
  const editFormHandle = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };
  const submitFormHandle = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };
  useEffect(() => {
    stanNameRef.current.focus();
  }, [isEdit]);
  return (
    <div className="seller-profil-content">
      <div className="profil-stan-container">
        <div className="stan active stan-seller-profil">
          <img src={stanObject[1].image} alt="stan" />
          <span>{stanObject[1].name}</span>
        </div>
      </div>
      <div className="profil-menu-info">
        <h2>MENU INFO</h2>
        <div className="total-menu">
          <FontAwesomeIcon icon={faUtensils} size="xl" />
          <h4>Total Menu : 44</h4>
        </div>
        <div className="foods-total">
          <FontAwesomeIcon icon={faBowlFood} size="xl" />
          <h4>23</h4>
        </div>
        <div className="drinks-total">
          <FontAwesomeIcon icon={faMugHot} size="xl" />
          <h4>12</h4>
        </div>
        <div className="others-total">
          <FontAwesomeIcon icon={faCookie} size="xl" />
          <h4>99</h4>
        </div>
      </div>

      <div className="profil-account">
        <h2>ACCOUNT</h2>
        <div className="stan-image">
          <img src={stanObject[1].image} alt="stan" />
          <span className="change-image">
            <FontAwesomeIcon icon={faCamera} size="xl" />
          </span>
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
              <input type="submit" className="account-info-edit-button" value="submit" />
            ) : (
              <button onClick={(e) => editFormHandle(e)} className="account-info-edit-button">
                edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerProfilContent;
