import React, {useEffect, useState} from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import "./LoginRegister.css";
import { Navbar } from "../components/navbar";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [jwt, setJwt] = useState("", "jwt");
  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();
    <Navigate to='/dashboard'></Navigate>
  }
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Login</h1>
        <form className="forms" >
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
          <button className="login-button" type="submit" onClick={(e) => handleLogin(e)}>
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
