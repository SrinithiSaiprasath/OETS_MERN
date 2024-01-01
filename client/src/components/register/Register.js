// Register.js

import React from 'react';
import './style1.css'; // Make sure to adjust the path based on your project structure

function Register() {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>Thank You for Registering</title>
        </head>
        <body>
          <div className="container">
            <button type="submit" className="btn">Submit</button>
            <div className="popup">
              <h2>Thank You! For Registering</h2>
              <a href="mainindex.html"><button type="button">Redirect</button></a>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default Register;
