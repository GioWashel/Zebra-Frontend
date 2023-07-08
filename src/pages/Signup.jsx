import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[reEnterPassword, setReEnterPassword] = useState("");

  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Signup</h1>

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
          <input
            className="form-input"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
            type="password"
            placeholder="Enter password again"
            required
          />
          <button className="login-button" type="submit">
            <span>SUBMIT</span>
          </button>
        </form>
        <Link to="/login">
          <button className="link-button">
            Have an account? Login
          </button>
        </Link>
      </div>
    </div>
  );
};
