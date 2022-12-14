import React, { useEffect, useState } from "react";
import yoyum2 from "../assets/images/yoyum2.png";
import yoyum1 from "../assets/images/yoyum1.png";
import StanCard from "../components/StanCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/admin.css";
import { fetchStand } from "../axios";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [stands, setStands] = useState();
  const [loading, setLoading] = useState(true);

  const [reFetch, setReFetch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getStand = async () => {
      const { data } = await fetchStand({});
      setStands(data.data);
    };
    getStand();
    setLoading(false);
    setReFetch(false);
  }, [reFetch]);

  const logout = () => {
    localStorage.removeItem("token", "");
    localStorage.removeItem("role", "");
    navigate("/admin/sign-in");
  };

  const createStand = () => {
    navigate("/admin/create-stand");
  };

  return (
    <div className="admin">
      <div className="admin-navbar">
        <div className="admin-yoyum-logo">
          <img src={yoyum2} rounded alt="Logo Yoyum" />
          <img src={yoyum1} alt="yoyum logo"></img>
        </div>
        <div className="admin-title">
          <h1>ADMIN</h1>
        </div>
        <div className="profil-drop-down">
          <div className="profil-icon">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </div>
          <span className="triangle"></span>
          <div className="profil-drop-down-menu">
            <div className="log-out-button" onClick={logout}>
              <span>LOG OUT </span>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-content">
        {loading ? (
          <span>Load...</span>
        ) : (
          stands?.map((stand) => (
            <StanCard
              id={stand.id}
              name={stand.name}
              number={stand.number}
              active={stand.active}
              img={stand.img}
              setReFetch={setReFetch}
              reFetch={reFetch}
            />
          ))
        )}
        <div className="add-stan-button" onClick={createStand}></div>
      </div>
    </div>
  );
};

export default Admin;
