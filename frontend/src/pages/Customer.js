import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "../assets/css/customer.css";
import Navbar from "../components/Navbar";
import CustomerContent from "../components/CustomerContent";
const Customer = () => {
  const [scrollCondition, setScrollCondition] = useState("");
  return (
    <div className="customer">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="navigationBar">
        <Navbar scrollCondition={scrollCondition} />
        <CustomerContent setScrollCondition={setScrollCondition} />
      </div>
    </div>
  );
};

export default Customer;
