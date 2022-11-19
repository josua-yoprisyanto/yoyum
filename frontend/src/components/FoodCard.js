import React from "react";
import "../assets/css/foodCard.css";
function FoodCard() {
  return (
    <div className="food-card">
      <div className="food-img">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
          alt="makanan"
        />
      </div>
      <div className="food-info">
        <h6 className="food-info-title">Food Name Food Name </h6>
        <h6 className="food-info-name">Rp 99.999</h6>
      </div>
    </div>
  );
}

export default FoodCard;
