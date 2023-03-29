import React, { useState } from "react";
import "../css/login.css";
function Login() {
// const [loggedIn, setLoggedIn] = useState(false);

// useEffect(() => {
//   const storedUsername = localStorage.getItem("username");
//   const storedPassword = localStorage.getItem("password");

//   if (storedUsername && storedPassword) {
//     setLoggedIn(true);
//   }
// }, []);

// const handleLogin = (username, password) => {
//   const storedUsername = localStorage.getItem("username");
//   const storedPassword = localStorage.getItem("password");

//   if (username === storedUsername && password === storedPassword) {
//     setLoggedIn(true);
//   } else {
//     alert("Invalid username or password.");
//   }
// };

// const handleLogout = () => {
//   localStorage.removeItem("username");
//   localStorage.removeItem("password");
//   setLoggedIn(false);
// };

  return (
    <>
      <div className="login-container">
        <form id="login-form" className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            <button type="button" id="signup-link" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="sign-container">
        <form id="sign-form" className="sign-form" onSubmit={handleSignin}>
          <h2>Signin</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Signin</button>
        </form>
      </div>
    </>
  );
}

export default Login;
