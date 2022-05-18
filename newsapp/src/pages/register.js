import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("successful registration");
      console.log("successful registration");

      navigate("/");
    }
  }

    return (
      <Container
        className="mt-4"
        style={{
          width: "50%",
          // marginTop:"6rem"
        }}
      >
        <form
          className="border-dark"
          method="POST"
          style={{
            marginTop: "6rem",
          }}
        >
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={handleInputs}
              autoComplete="off"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              name="lname"
              autoComplete="off"
              value={user.lname}
              onChange={handleInputs}
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              autoComplete="off"
              name="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-dark text-white"
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">Login?</Link>
          </p>
        </form>
      </Container>
    );
};
export default Register;
