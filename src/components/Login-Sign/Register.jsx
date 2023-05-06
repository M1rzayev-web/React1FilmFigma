import React, { useState } from "react";
import App from "../../App";
import "../css/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      username === localStorage.getItem("username") &&
      password === localStorage.getItem("password")
    ) {
      return <App />;
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
  };

  return (
    <>
      <div className="login-container">
        <form id="login-form" className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            <a href="#" id="signup-link">
              Sign up
            </a>
          </div>
        </form>

        <form id="signup-form" className="signup-form" onSubmit={handleSignup}>
          <h2>Sign up</h2>
          <div className="form-control">
            <label htmlFor="new-username">Username</label>
            <input
              type="text"
              id="new-username"
              value={username}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="new-password">Password</label>
            <input
              type="password"
              id="new-password"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign up</button>
          <div className="login-link">
            <a href="#" id="login-link">
              Login
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
