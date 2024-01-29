import React, { useState } from "react";
import { userLogin } from "../api/ajax";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userObject = { email, password };
      const { user, message, token } = await userLogin(userObject);

      setToken(token);
      navigate("/account");
      setErrorMessage("");
      console.log(user);
      console.log(message);
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div className="login">
        <form className="loginform" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
}