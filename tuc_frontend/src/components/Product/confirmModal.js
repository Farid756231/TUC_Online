import React from 'react';
import '../../assets/Stylesheet_css/confirmModal.css'; 
const ConfirmModal = ({ product, onConfirm, onCancel }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Bekräfta köp</h2>
        <p>Vill du köpa <strong>{product.name}</strong>?</p>
        <div className="modal-actions">
          <button className="confirm-button" onClick={() => onConfirm(product)}>
            Köp
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;