import React, { useState } from "react";
import "../assets/css/stanCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { changeStandActiveStatus, deleteStand, fetchStand } from "../axios";

const StanCard = ({ id, name, number, active, img, setReFetch, reFetch }) => {
  const [standActive, setStandActive] = useState(active);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteStand = async (id) => {
    await deleteStand({ id });
    setReFetch(!reFetch);
    setShow(false);
  };

  const changeActiveStatus = async (id) => {
    const { data } = await changeStandActiveStatus({
      active: !standActive,
      id: id,
    });
    console.log(data);
    setStandActive(!standActive);
    setReFetch(!reFetch);
  };

  return (
    <>
      <div className="stan-card">
        {img !== null ? (
          <img src={img} className="stan-img" />
        ) : (
          <div className="stan-img">
            <span className="d-flex justify-content-center align-items-center h-100">
              <div>
                <FontAwesomeIcon icon={faStore} size="6x" />
              </div>
            </span>
          </div>
        )}
        <div className="stan-info">
          <h4 className="stan-name">{name}</h4>
          <span className="stan-telp">{number}</span>
          <div className="stan-toggle">
            <label className="toggle">
              <input
                type="checkbox"
                checked={standActive}
                onChange={() => changeActiveStatus(id)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="stan-delete" onClick={handleShow}>
            <FontAwesomeIcon icon={faTrash} className="trash-icon" size="lg" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDeleteStand(id)}>
            Delete Stand
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StanCard;
