import React from "react";
import yoyum2 from "../assets/images/yoyum2.png";
import yoyum1 from "../assets/images/yoyum1.png";
import StanCard from "../components/StanCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/admin.css";
const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-navbar">
        <div className="admin-yoyum-logo">
          <img src={yoyum2} rounded alt="Logo Yoyum" />
          <img src={yoyum1} alt="yoyum logo"></img>
        </div>
        <div className="admin-title">
          <h1>ADMIN</h1>
        </div>
        <div className="profil-drop-down">
          <div className="profil-icon">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
          <span className="triangle"></span>
        </div>
      </div>
      <div className="admin-content">
        <StanCard /> <StanCard /> <StanCard /> <StanCard /> <StanCard /> <StanCard />
        <StanCard /> <StanCard />
        <StanCard /> <StanCard />
        <StanCard /> <StanCard />
      </div>
    </div>
  );
};

export default Admin;
