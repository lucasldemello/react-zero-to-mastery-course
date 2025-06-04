import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Register before posting</h1>
      <p>
        Create your account and share your history with the world. It's free and
        easy!
      </p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </label>
        <label>
          <span>Confirm Password:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </label>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
