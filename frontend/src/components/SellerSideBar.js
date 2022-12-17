import React from "react";
import "../assets/css/sidebar.css";
import yoyum2 from "../assets/images/yoyum2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
const SideBar = () => {
  const { profil } = useParams();

  return (
    <div className="sidebar ">
      <div className="yoyum-logo-2">
        <img src={yoyum2} rounded alt="Logo Yoyum" />
      </div>
      <div className="stan-container">
        <div className="stan-wrapper">
          <Link
            style={{ textDecoration: "none" }}
            to="/seller/dashboard"
            className={profil ? "stan" : "stan active"}
          >
            <FontAwesomeIcon icon={faClipboard} />
            <span>Menu</span>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/seller/profil"
            className={profil ? "stan active" : "stan"}
          >
            <FontAwesomeIcon icon={faAddressCard} />
            <span>Profil</span>
          </Link>
        </div>
      </div>
      <div className="sidebar-shadow-left"></div>
      <div className="sidebar-shadow-right"></div>
    </div>
  );
};

export default SideBar;
