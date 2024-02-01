import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };

  const handleClick = () => {
    console.log("Before Toggle:", show);
    setShow(!show);
    console.log("After Toggle:", show);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter Email"
        className="inputBox"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="password-container">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          className="inputBox"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="button" onClick={handleClick}>
          {" "}
          {show ? "Hide" : "Show"}
        </button>
      </div>
      <button type="button" className="appButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
