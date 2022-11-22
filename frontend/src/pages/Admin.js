import React from "react";
import yoyum2 from "../assets/images/yoyum2.png";
import StanCard from "../components/StanCard";
import "../assets/css/admin.css";
const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-navbar">
        <div className="admin-yoyum-logo-2">
          <img src={yoyum2} rounded alt="Logo Yoyum" />
        </div>
        <div className="admin-title">
          <h1>ADMIN</h1>
        </div>
        <div className="profil-drop-down">
          <div className="profil-icon"></div>
          <span className="triangle"></span>
        </div>
      </div>
      <div className="admin-content">
        <div className="stan-container">
          <StanCard />
        </div>
      </div>
    </div>
  );
};

export default Admin;
