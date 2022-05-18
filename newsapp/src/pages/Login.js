import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid inputs");
    } else {
      window.alert("Login Successful");
      navigate("/");
    }
  };
  return (
    <Container
      className="mt-4"
      style={{
        width: "50%",
      }}
    >
      <form
        className="border-dark"
        method="POST"
        style={{
          marginTop: "6rem",
        }}
      >
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            onClick={loginUser}
            className="btn btn-dark text-white"
          >
            login
          </button>
        </div>
        <p className="forgot-password text-right">
          Create New Account <Link to="/register">Register</Link>
        </p>
        <p className="forgot-password text-right">
          Forgot <Link to="#">password?</Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
