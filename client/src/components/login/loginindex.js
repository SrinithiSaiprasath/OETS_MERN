import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './style (1).css';


function home{
  return (
    <div>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Animated Login Form | CodingNepal</title>
          </head>
          <body>
            <div class="center">
              <h1>Login Form</h1>
              <form method="post">
                <div class="txt_field">
                  <input type="text" required>
                  <span></span>
                  <label>Username</label>
                </div>
                <div class="txt_field">
                  <input type="password" required>
                  <span></span>
                  <label>Password</label>
                </div>
                <div class="pass">Forgot Password?</div>
                <input type="submit" value="Login"  onclick="window.location.href = 'mainindex.html';">
                <div class="signup_link">
                  Not a member? <a href="Signup.html">Signup</a>
                </div>
              </form>
            </div>

          </body>
        </html>
    </div>
  )
}
