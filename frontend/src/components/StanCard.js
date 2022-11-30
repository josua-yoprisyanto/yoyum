import React from "react";
import "../assets/css/stanCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StanCard = () => {
  return (
    <div className="stan-card">
      <div className="stan-img"></div>
      <div className="stan-info">
        <h4 className="stan-name">Kantin Davin</h4>
        <span className="stan-telp">+23 213 2132 1321</span>
        <div className="stan-toggle">
          <label className="toggle">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="stan-delete">
          <FontAwesomeIcon icon={faTrash} className="trash-icon" size="lg" />
        </div>
      </div>
    </div>
  );
};

export default StanCard;
