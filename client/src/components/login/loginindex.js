import React from 'react';
import './style (1).css';

function Home() {
  return (
    <div className="center">
      <h1>Login Form</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input
          type="submit"
          value="Login"
          onClick={() => {
            window.location.href = 'mainindex.html';
          }}
        />
        <div className="signup_link">
          Not a member? <a href="Signup.html">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default Home;
