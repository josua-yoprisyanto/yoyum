import React from "react";
import "../assets/css/seller.css";
import "../assets/css/customer.css";
import SellerSideBar from "../components/SellerSideBar";
import SellerContent from "../components/SellerContent";
const Customer = () => {
  return (
    <div className="customer">
      <div className="sidebar">
        <SellerSideBar />
      </div>
      <div className="navigationBar">
        <div className="title">
          <h1>SELLER</h1>
        </div>
        <SellerContent />
      </div>
    </div>
  );
};

export default Customer;
