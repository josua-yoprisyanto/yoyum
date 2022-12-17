import React, { useEffect, useState } from "react";
import "../assets/css/sidebar.css";
import yoyum2 from "../assets/images/yoyum2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { getCustomerStand } from "../axios";
import { Link, useParams } from "react-router-dom";

const SideBar = () => {
  const [stands, setStands] = useState();

  const params = useParams();

  useEffect(() => {
    const getStand = async () => {
      const { data } = await getCustomerStand();

      setStands(data.data);
    };
    getStand();
  }, []);

  return (
    <div className="sidebar ">
      <div className="yoyum-logo-2">
        <img src={yoyum2} rounded alt="Logo Yoyum" />
      </div>
      <div className="stan-container">
        <div className="stan-wrapper">
          {stands?.map((stan) => (
            <Link
              to={`/${stan.id}`}
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {console.log()}
              <div
                className={
                  Number(params.id) === stan.id ? "stan active" : "stan"
                }
              >
                {stan.image ? (
                  <img src={stan.image} alt="stan" />
                ) : (
                  <FontAwesomeIcon icon={faStore} />
                )}
                <span>{stan.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-shadow-left"></div>
      <div className="sidebar-shadow-right"></div>
    </div>
  );
};

export default SideBar;
