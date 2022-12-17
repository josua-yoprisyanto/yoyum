import React from "react";
import { createPortal } from "react-dom";
import "../assets/css/confirmModal.css";
const ConfirmModal = ({ openModal, text, yesHandle, noHandle }) => {
  if (!openModal) return null;

  return createPortal(
    <div className="confirm-modal-container">
      <div className="confirm-modal">
        <div className="confirm-modal-text">
          <span>{text}</span>
        </div>
        <div className="confirm-modal-button">
          <button
            onClick={() => noHandle()}
            className="confirm-modal-no-button"
          >
            no
          </button>
          <button
            onClick={() => yesHandle()}
            className="confirm-modal-yes-button"
          >
            yes
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ConfirmModal;
