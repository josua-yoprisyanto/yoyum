import React from "react";
import SideBar from "../components/SideBar";
import "../assets/css/customer.css";
import Navbar from "../components/Navbar";

const Customer = () => {
  return (
    <div className="customer">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="navigationBar">
        <Navbar />
        <div className="content mt-3">
          <div className="content-title-container">
            <span className="short-line" />
            <span className="long-line" />
            <span className="content-title">FOODS</span>
            <span className="long-line" />
            <span className="short-line" />
          </div>
          <div className="content-title-container">
            <span className="short-line" />
            <span className="long-line" />
            <span className="content-title">DRINKS</span>
            <span className="long-line" />
            <span className="short-line" />
          </div>
          <div className="content-title-container">
            <span className="short-line" />
            <span className="long-line" />
            <span className="content-title">OTHERS</span>
            <span className="long-line" />
            <span className="short-line" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Customer;
