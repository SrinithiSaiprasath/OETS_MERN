import React from 'react';
import './YourCSSFile.css'; // css file path inga 

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    window.location.href = 'mainindex.html'; //main page path 
  };

  return (
    <div className="center">
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
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
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <a href="Signup.html">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
