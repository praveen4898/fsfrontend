import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    // fetch("https://nutty-gold-wasp.cyclic.app/users/login", {
      fetch("https://notesmaker-shoy.onrender.com/users/login",{

      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/notes")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
