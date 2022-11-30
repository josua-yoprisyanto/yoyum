import React from "react";
import "../assets/css/seller.css";
import "../assets/css/customer.css";
import SellerSideBar from "../components/SellerSideBar";
import SellerProfilContent from "../components/SellerProfilContent";
const Customer = () => {
  return (
    <div className="customer">
      <div className="sidebar">
        <SellerSideBar />
      </div>
      <div className="navigationBar">
        <div className="seller-title">
          <h1>SELLER</h1>
        </div>
        <SellerProfilContent />
      </div>
    </div>
  );
};

export default Customer;
