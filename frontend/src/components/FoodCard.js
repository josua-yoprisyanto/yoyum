import React from "react";
import "../assets/css/foodCard.css";
import { getPrice } from "../utils/getPrice";
import { capitalizeFirstLetter } from "../utils/getCapitalize";

function FoodCard(props) {
  const { foodPrice, foodName, foodImage } = props;

  return (
    <div className="food-card">
      <div className="food-img">
        <img src={foodImage} alt="makanan" />
      </div>
      <div className="food-info">
        <h6 className="food-info-title">{capitalizeFirstLetter(foodName)}</h6>
        <h6 className="food-info-name">{getPrice(foodPrice)}</h6>
      </div>
    </div>
  );
}

export default FoodCard;
