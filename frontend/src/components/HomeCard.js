import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCard = ({ menu }) => {
  console.log(menu);

  return (
    <Link
      to={`/${menu.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Card className="p-3">
        {menu?.img !== null ? (
          <Card.Img variant="top" src={menu.img} />
        ) : (
          <FontAwesomeIcon icon={faStore} size="5x" />
        )}
        <Card.Body>
          <Card.Title className="text-center">{menu.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default HomeCard;
