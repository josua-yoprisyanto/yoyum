import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "../assets/css/menuContent.css";
import EditFoodModal from "../modal/EditFoodModal";
import { fetchStandMenu } from "../axios";

const CustomerContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState();
  const [stands, setStands] = useState();
  const [reFetch, setReFetch] = useState(false);

  const handleOpenmodal = (menuType) => {
    setIsModalOpen(true);
    setType(menuType);
  };

  useEffect(() => {
    const fetchStandMenus = async () => {
      const { data } = await fetchStandMenu();

      setStands(data.data);
    };
    fetchStandMenus();
  }, [reFetch]);

  return (
    <>
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
            {stands
              ?.filter((stand) => stand.type === "food")
              .map((stand) => (
                <FoodCard
                  foodName={stand?.name}
                  foodPrice={stand?.price}
                  foodImage={stand?.img}
                />
              ))}
            <div
              className="add-food-button"
              onClick={() => handleOpenmodal("food")}
            ></div>
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
            {stands
              ?.filter((stand) => stand.type === "drink")
              .map((stand) => (
                <FoodCard
                  foodName={stand?.name}
                  foodPrice={stand?.price}
                  foodImage={stand?.img}
                />
              ))}
            <div
              className="add-food-button"
              onClick={() => handleOpenmodal("drink")}
            ></div>
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
            {stands
              ?.filter((stand) => stand.type === "other")
              .map((stand) => (
                <FoodCard
                  foodName={stand?.name}
                  foodPrice={stand?.price}
                  foodImage={stand?.img}
                />
              ))}
            <div
              className="add-food-button"
              onClick={() => handleOpenmodal("other")}
            ></div>
          </div>
        </div>
      </div>

      <EditFoodModal
        openModal={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type={type}
        setReFetch={setReFetch}
      />
    </>
  );
};

export default CustomerContent;
