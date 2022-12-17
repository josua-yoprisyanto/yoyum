import React, { useEffect, useState } from "react";
import "../assets/css/seller.css";
import "../assets/css/customer.css";
import SellerSideBar from "../components/SellerSideBar";
import SellerProfilContent from "../components/SellerProfilContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import yoyum1 from "../assets/images/yoyum1.png";
import { useNavigate } from "react-router-dom";
import { standDetail } from "../axios";
const Customer = () => {
  const navigate = useNavigate();

  const [stand, setStand] = useState();

  const logout = () => {
    localStorage.removeItem("token", "");
    localStorage.removeItem("role", "");
    navigate("/seller/sign-in");
  };

  useEffect(() => {
    const getStandDetail = async () => {
      const { data } = await standDetail();

      setStand(data.data);
    };
    getStandDetail();
  }, []);

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

        <SellerProfilContent isSellerProfile={true} stand={stand} />
      </div>
    </div>
  );
};

export default Customer;
