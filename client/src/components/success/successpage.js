// SuccessPage.js
//Changed Success page 
import React from 'react';
import './style1.css'; 

function SuccessPage() {
  return (
    <div className="container">
      <button type="submit" className="btn">
        Submit
      </button>
      <div className="popup">
        <img src="Tick1.png" alt="tick-icon" /> //path to image needed 
        <h2>Thank You!</h2>
        <p>Your details have been successfully submitted. Thanks!!</p>
        <a href="mapsfinal.html"> // change this to MapsFinal.js 
          <button type="button">Track Your Order</button>
        </a>
      </div>
    </div>
  );
}

export default SuccessPage;
