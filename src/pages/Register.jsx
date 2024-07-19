import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        alert("Registered successfully!");
        setInput({});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="register">
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="email"
            value={input.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            value={input.password}
            onChange={handleChange}
            name="password"
          />
          <button type="submit">Sign UP</button>
          <p style={{ marginTop: 7 }}>
            Already registered <Link to="/">Click here.</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
