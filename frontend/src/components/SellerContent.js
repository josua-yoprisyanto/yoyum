import React, { useState } from "react";
import FoodCard from "./FoodCard";
import "../assets/css/menuContent.css";
import EditFoodModal from "../modal/EditFoodModal";

const CustomerContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <EditFoodModal openModal={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
            <FoodCard
              foodName="nasi kari"
              foodPrice={99000}
              foodImage="https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
            />
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
            <FoodCard
              foodName="nasi kari"
              foodPrice={99000}
              foodImage="https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
            />
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
            <FoodCard
              foodName="nasi kari"
              foodPrice={99000}
              foodImage="https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerContent;
