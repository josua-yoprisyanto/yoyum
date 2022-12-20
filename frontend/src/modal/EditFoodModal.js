import React, { useState } from "react";
import { createPortal } from "react-dom";
import FoodCard from "../components/FoodCard";
import "../assets/css/editFoodModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmModal from "./ConfirmModal";
import { createStandMenu } from "../axios";
const EditFoodModal = ({ openModal, setIsModalOpen, type, setReFetch }) => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodImage, setFoodImage] = useState();

  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const cancelHandle = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  console.log(foodImage);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", foodName);
    formData.append("price", foodPrice);
    formData.append("type", type);
    formData.append("img", foodImage);

    await createStandMenu({ formData });
    setReFetch(true);
    setIsModalOpen(false);
  };
  if (!openModal) return null;

  return createPortal(
    <>
      {/* <ConfirmModal
        text="are you sure to save change?"
        openModal={openConfirmModal}
        noHandle={() => setOpenConfirmModal(false)}
        yesHandle={() => handleSubmit()}
      /> */}
      <div className="edit-food-modal-container">
        <div className="edit-food-modal-wrapper">
          <div className="edit-food-modal-food-card">
            <FoodCard
              foodName={foodName}
              foodPrice={foodPrice}
              foodImage={foodImage}
            />
          </div>
          <h2 className="edit-food-modal-title"> Create Menu</h2>
          <form className="edit-food-modal">
            <table className="edit-food-modal-input">
              <tr>
                <td>
                  <label for="food-name">Food Name</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="food-name"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="food-price">Price</label>
                </td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    id="food-price"
                    value={foodPrice}
                    onChange={(e) => setFoodPrice(e.target.value)}
                  />
                </td>
              </tr>
            </table>

            <label className="edit-food-modal-image-input">
              <span>Insert Picture</span>
              <FontAwesomeIcon icon={faCamera} size="lg" />
              <input
                type="file"
                name="myImage"
                accept="image/png,  image/jpeg"
                value={foodImage}
                onChange={(e) => setFoodImage(e.target.value)}
              />
            </label>
            {/* <button className="edit-food-modal-delete-button">
              <FontAwesomeIcon icon={faTrash} />
            </button> */}

            <button
              className="edit-food-modal-cancel-button"
              onClick={(e) => cancelHandle(e)}
            >
              cancel
            </button>
            <input
              type="submit"
              value="submit"
              className="edit-food-modal-submit-button"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditFoodModal;
