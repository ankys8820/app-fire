import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        console.log(user);
        alert("Logged in successfully!");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={input.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={input.password}
            onChange={handleInput}
          />
          <button type="submit">Login</button>
          {error && <span>Wrong Email or Password!</span>}
          <p style={{ marginTop: 7 }}>
            If you not registered <Link to="signup">Click here.</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
