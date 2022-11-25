import React from "react";
import "../assets/css/sellerProfilContent.css";
import { stanObject } from "../data/stanObject.ts";
import icon from "../assets/images/yoyum1.png";
const SellerProfilContent = () => {
  return (
    <div className="seller-profil-content">
      <div className="profil-stan-container">
        <div className="stan active stan-seller-profil">
          <img src={stanObject[1].image} alt="stan" />
          <span>{stanObject[1].name}</span>
        </div>
      </div>
      <div className="profil-menu-info">
        <h2>MENU INFO</h2>
        <div className="total-menu">
          <img src={icon} alt="icon" />
          <h4>Total Menu : 44</h4>
        </div>
        <div className="foods-total">
          <img src={icon} alt="icon" />
          <h4>23</h4>
        </div>
        <div className="drinks-total">
          <img src={icon} alt="icon" />
          <h4>12</h4>
        </div>
        <div className="others-total">
          <img src={icon} alt="icon" />
          <h4>99</h4>
        </div>
      </div>

      <div className="profil-account">
        <h2>ACCOUNT</h2>
        <div className="stan-image">
          <img src={stanObject[1].image} alt="stan" />
          <span className="change-image">
            <img src={icon} alt="icon" />
          </span>
        </div>

        <table>
          <tr>
            <td>Stan Name</td>
            <td>:</td>
            <td>stan 2</td>
            <td>
              <img src={icon} alt="icon" />
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>:</td>
            <td>stanDavin@gmail.com</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SellerProfilContent;
