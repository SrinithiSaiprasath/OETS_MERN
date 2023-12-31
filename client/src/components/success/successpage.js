import React from 'react';
import './style1.css'; // Make sure to adjust the path based on your project structure

function SuccessPage() {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Pop up design</title>
        </head>
        <body>
          <div className="container">
            <button type="submit" className="btn">
              Submit
            </button>
            <div className="popup">
              <img src="Tick1.png" alt="tick-icon" />
              <h2>Thank You!</h2>
              <p>Your details have been successfully submitted. Thanks!!</p>
              <a href="mapsfinal.html">
                <button type="button">Track Your Order</button>
              </a>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default SuccessPage;
