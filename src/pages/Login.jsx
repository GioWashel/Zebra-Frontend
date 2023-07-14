import React, {useRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { Navbar } from "../components/navbar";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: { 'Content-Type': 'application/json'}}
    fetch("http://localhost:8080/login", options).then((res) => {console.log(res)});
  };
  const handleClick = () => {
    return( <Link to ="/dashboard"></Link>);
  }
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Login</h1>
        <form className="forms" onSubmit={handleSubmit}>
          <input
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
            <button type="submit" className="login-button" type="submit"> 
              <span>LOGIN</span>
            </button>
        </form>
        <div>{errorMessage}</div>
        <Link to="/signup">
          <button className="link-button">
            Don't have an account? Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};
