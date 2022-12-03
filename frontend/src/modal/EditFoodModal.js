import React, { useState } from "react";
import { createPortal } from "react-dom";
import FoodCard from "../components/FoodCard";
import "../assets/css/editFoodModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTrash } from "@fortawesome/free-solid-svg-icons";
const EditFoodModal = ({ openModal }) => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);

  if (!openModal) return null;
  return createPortal(
    <div className="edit-food-modal-container">
      <div className="edit-food-modal-wrapper">
        <div className="edit-food-modal-food-card">
          <FoodCard
            foodName={foodName}
            foodPrice={foodPrice}
            foodImage="https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
          />
        </div>
        <form className="edit-food-modal">
          <h2 className="edit-food-modal-title"> Edit Food</h2>
          <div className="edit-food-modal-input">
            <table>
              <tr>
                <td>
                  <label for="food-name">Food Name</label>
                </td>
                <td>:</td>
                <td>
                  <input type="text" id="food-name" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="food-price">Price</label>
                </td>
                <td>:</td>
                <td>
                  <input type="text" id="food-price" value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)} />
                </td>
              </tr>
            </table>
            <div className="edit-food-modal-button-1">
              <label className="edit-food-modal-image-input">
                <span>Change Picture</span>
                <FontAwesomeIcon icon={faCamera} size="lg" />
                <input type="file" name="myImage" accept="image/png,  image/jpeg" />
              </label>
              <button className="edit-food-modal-delete-button">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className="edit-food-modal-button-2">
            <button className="edit-food-modal-cancel-button">cancel</button>
            <input type="submit" value="submit" className="edit-food-modal-submit-button" />
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditFoodModal;
