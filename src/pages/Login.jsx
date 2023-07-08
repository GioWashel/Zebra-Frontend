import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Login</h1>

        <form className="forms">
          <input
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button className="login-button" type="submit">
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
