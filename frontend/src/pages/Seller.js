import React from "react";
import "../assets/css/seller.css";
import "../assets/css/customer.css";
import SellerSideBar from "../components/SellerSideBar";
import SellerContent from "../components/SellerContent";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yoyum1 from "../assets/images/yoyum1.png";
import { useNavigate } from "react-router-dom";
const Customer = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token", "");
    localStorage.removeItem("role", "");
    navigate("/seller/sign-in");
  };

  return (
    <div className="customer">
      <div className="sidebar">
        <SellerSideBar />
      </div>
      <div className="navigationBar">
        <div className="seller-navbar">
          <div className="seller-yoyum-logo">
            <img src={yoyum1} alt="yoyum logo"></img>
          </div>
          <h1>SELLER</h1>
          <div className="profil-drop-down">
            <div className="profil-icon">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
            <span className="triangle"></span>
            <div className="profil-drop-down-menu">
              <div className="log-out-button" onClick={logout}>
                <span>LOG OUT </span>
              </div>
            </div>
          </div>
        </div>
        <SellerContent />
      </div>
    </div>
  );
};

export default Customer;
