import {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import axios from "axios";
export const Signup = () => {


  const userRef = useRef();
  const errRef = useRef();

  //regex for validating the user inputed the email and password in correctly 
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


  //states for email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //states for password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  //states for matching password
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  //states for errors
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  
  //validate user email 
  /*
  useEffect(() => {;
    setValidEmail(USER_REGEX.test(email));
  }, [email]);

  */
  //validate password and matching password
  useEffect(() => {
    const isValidPwd = PWD_REGEX.test(password);
    setValidPassword(isValidPwd);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);


  //don't show error message when user is making changes
  useEffect(() => {
    setErrorMessage("");
  }, [email, password, matchPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
        // if button enabled with JS hack
        
        const user = {email, password};
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)};
        fetch("http://localhost:8080/signup", options).then((res) => {console.log(res)});
  }
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Signup</h1>

        <form className="forms" onSubmit={handleSubmit}>
          <input
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            //aria-invalid={ validEmail ? "false" : "true"}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <input
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            aria-invalid={validPassword ? "false" : "true"}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <input
            className="form-input"
            value={matchPassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            type="password"
            placeholder="Enter password again"
            required
            aria-invalid={validMatch ? "false" : "true"}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <button className="login-button" type="submit">
            <span>SUBMIT</span>
          </button>
          <section>
            <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
          </section>
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
