import React from "react";
import FoodCard from "./FoodCard";
import "../assets/css/menuContent.css";

function CustomerContent({ setScrollCondition }) {
  return (
    <div className="content">
      <div>
        <div className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">FOODS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>

      <div>
        <div className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">DRINKS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>

      <div>
        <div className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">OTHERS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </div>
  );
}

export default CustomerContent;
