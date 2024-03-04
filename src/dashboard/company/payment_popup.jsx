// PaymentPopup.js

import React, { useState } from 'react';
import './payment_popup.css'; // Import the CSS file for styling

function PaymentPopup({ onClose }) {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber' && !/^\d*$/.test(value)) {
      return; // Only allow numbers for card number
    }
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log('Submitting card details:', cardDetails);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="payment-popup">
      <div className="payment-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enter Card Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Card Number:
            <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} pattern="\d*" />
          </label>
          <label>
            Expiry Date:
            <input type="text" name="expiryDate" value={cardDetails.expiryDate} onChange={handleInputChange} />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleInputChange} />
          </label>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPopup;
