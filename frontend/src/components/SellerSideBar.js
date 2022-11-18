import React from "react";
import "../assets/css/sidebar.css";
import yoyum2 from "../assets/images/yoyum2.png";
import yoyum1 from "../assets/images/yoyum1.png";
const SideBar = () => {
  return (
    <div className="sidebar ">
      <div className="yoyum-logo-2">
        <img src={yoyum2} rounded alt="Logo Yoyum" />
      </div>
      <div className="stan-container">
        <div className="stan-wrapper">
          <div className="stan active">
            <img src={yoyum1} alt="stan" />
            <span>Menu</span>
          </div>
          <div className="stan">
            <img src={yoyum1} alt="stan" />
            <span>Profil</span>
          </div>
        </div>
      </div>
      <div className="sidebar-shadow-left"></div>
      <div className="sidebar-shadow-right"></div>
    </div>
  );
};

export default SideBar;
