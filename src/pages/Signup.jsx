import {useState} from "react";
import { Link, Navigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import "./LoginRegister.css";
import { emphasize } from "@mui/material";


export const Signup = () => {

  const[values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email!",
      required: true
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*-])[a-zA-Z0-9!@#$%^&*-]{8,20}$',
      required: true
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: values.password,
      errorMessage: "Passwords must match!"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})}
    fetch("http://localhost:8080/signup", options).then((res) => {console.log(res); setSuccess(!success)}).catch(err => {setSuccess(false)});
  };

  const handleClick = () => {
    if(success) {
      <Navigate to="/dashboard"></Navigate>
    }
  };
  const onChange =  (e) => {
      setValues({...inputs, [e.target.name]: e.target.value});
      if(e.target.name === "email") {
        setEmail(e.target.value);
      }
      if(e.target.name === "password") {
        setPassword(e.target.value)
      }
  };
  return (
    <div className="login-register-container">
      <div className="auth-form-container">
        <h1 className="top-h1">Signup</h1>

        <form className="forms" onSubmit={handleSubmit}>
          {inputs.map((input) => (<FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange} /> ))}
          <button className="login-button" type="submit" onClick={() => {handleClick}}>
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
