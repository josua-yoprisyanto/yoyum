import React, { useRef, useEffect } from "react";
import FoodCard from "./FoodCard";
import "../assets/css/menuContent.css";

function CustomerContent({ setScrollCondition, menus }) {
  const foods = useRef();
  const drinks = useRef();
  const others = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollCondition(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(foods.current);
    observer.observe(drinks.current);
    observer.observe(others.current);
  }, [setScrollCondition]);

  return (
    <div className="content">
      <div>
        <div id="foods" ref={foods} className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">FOODS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          {menus
            ?.filter((menu) => menu.type === "food")
            .map((menu) => (
              <FoodCard
                foodName={menu.name}
                foodPrice={menu.price}
                foodImage={menu.img}
              />
            ))}
        </div>
      </div>

      <div>
        <div ref={drinks} id="drinks" className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">DRINKS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          {menus
            ?.filter((menu) => menu.type === "drink")
            .map((menu) => (
              <FoodCard
                foodName={menu.name}
                foodPrice={menu.price}
                foodImage={menu.img}
              />
            ))}
        </div>
      </div>

      <div>
        <div id="others" ref={others} className="content-title-container">
          <span className="short-line" />
          <span className="long-line" />
          <span className="content-title">OTHERS</span>
          <span className="long-line" />
          <span className="short-line" />
        </div>
        <div className="content-food-container">
          {menus
            ?.filter((menu) => menu.type === "other")
            .map((menu) => (
              <FoodCard
                foodName={menu.name}
                foodPrice={menu.price}
                foodImage={menu.img}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerContent;
