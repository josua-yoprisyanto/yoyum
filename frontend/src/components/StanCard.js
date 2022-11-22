import React from "react";
import "../assets/css/stanCard.css";
const StanCard = () => {
  return (
    <div className="stan-card">
      <div className="stan-img"></div>
      <div className="stan-info">
        <span className="stan-name">Kantin Davin</span>
        <span className="stan-telp">+23 213 2132 1321</span>
        <div className="stan-toggle"></div>
        <div className="stan-delete"></div>
      </div>
    </div>
  );
};

export default StanCard;
