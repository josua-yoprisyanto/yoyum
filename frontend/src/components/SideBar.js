import React from "react";
import "../assets/css/sidebar.css";
import yoyum2 from "../assets/images/yoyum2.png";
import { stanObject } from "../data/stanObject.ts";

const SideBar = () => {
  return (
    <div className="sidebar ">
      <div className="yoyum-logo-2">
        <img src={yoyum2} rounded alt="Logo Yoyum" />
      </div>
      <div className="stan-container">
        <div className="stan-wrapper">
          {stanObject.map((stan) => (
            <div className="stan active">
              <img src={stan.image} alt="stan" />
              <span>{stan.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar-shadow-left"></div>
      <div className="sidebar-shadow-right"></div>
    </div>
  );
};

export default SideBar;
