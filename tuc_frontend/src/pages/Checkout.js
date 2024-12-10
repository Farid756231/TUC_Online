import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardDetails: "",
    date: new Date().toISOString(),
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmPayment = async () => {
    setIsConfirming(true);
    setResponseMessage(null);

    try {
      const response = await fetch("http://localhost:5268/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setResponseMessage(data.message || "Ett fel inträffade vid kassan.");
      }
    } catch (error) {
      setResponseMessage("Ett fel inträffade vid kassan.");
    } finally {
      setIsConfirming(false);
      setIsModalOpen(false);
    }
  };

  const handleCancelPayment = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Betala med kort</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Namn*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength="100"
          />
        </div>

        <div className="form-group">
          <label>E-post*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gatuadress*</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            maxLength="200"
          />
        </div>

        <div className="form-group">
          <label>Kortnummer*</label>
          <input
            type="text"
            name="cardDetails"
            value={formData.cardDetails}
            onChange={handleChange}
            required
            minLength="13"
            maxLength="16"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Bearbetar..." : "Slutför köpet"}
        </button>
      </form>

      {responseMessage && (
        <div className="response-message">{responseMessage}</div>
      )}

      {}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Bekräfta betalning</h3>
            <p>Är du säker på att du vill fortsätta med betalningen?</p>
            <div className="modal-actions">
              <button onClick={handleConfirmPayment} disabled={isConfirming}>
                {isConfirming ? "bearbetar..." : "Bekräfta"}
              </button>
              <button onClick={handleCancelPayment}>Avbryt</button> {}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
