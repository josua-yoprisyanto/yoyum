import React, { useState } from "react";
import "../assets/css/navbar.css";
import yoyum1 from "../assets/images/yoyum1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ scrollCondition, search, setSearch }) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="nav-container">
      <div className="yoyum-logo-1">
        <img src={yoyum1} alt="yoyum logo"></img>
      </div>
      <div className="action">
        <a
          href="#foods"
          className={scrollCondition === "foods" ? "active" : ""}
        >
          Foods
        </a>
        <a
          href="#drinks"
          className={scrollCondition === "drinks" ? "active" : ""}
        >
          Drinks
        </a>
        <a
          href="#others"
          className={scrollCondition === "others" ? "active" : ""}
        >
          Others
        </a>
        <span className="nav-underline"></span>
      </div>
      <div className={openSearch === true ? "open search" : "search"}>
        <div
          className="close-search-button"
          onClick={() => setOpenSearch(false)}
        >
          <span>x</span>
        </div>
        <input
          type="text"
          placeHolder="Foods, Drinks, Others"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-button">
          <FontAwesomeIcon icon={faSearch} />
          <span
            className="open-search-button"
            onClick={() => setOpenSearch(true)}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
