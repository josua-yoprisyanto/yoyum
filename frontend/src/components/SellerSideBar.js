import React from "react";
import "../assets/css/sidebar.css";
import yoyum2 from "../assets/images/yoyum2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faClipboard } from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  return (
    <div className="sidebar ">
      <div className="yoyum-logo-2">
        <img src={yoyum2} rounded alt="Logo Yoyum" />
      </div>
      <div className="stan-container">
        <div className="stan-wrapper">
          <div className="stan active">
            <FontAwesomeIcon icon={faClipboard} />
            <span>Menu</span>
          </div>
          <div className="stan">
            <FontAwesomeIcon icon={faAddressCard} />
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
