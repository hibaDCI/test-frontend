import React, {useContext} from "react";
import {MyContext} from "../context/context";
import {useNavigate} from "react-router-dom";
import BASE_URL from "../config/urlConfig.js";
export default function Login() {
  const {setUser} = useContext(MyContext);
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    //POST reuqest
    fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => {
        const token = res.headers.get("token");
        if (token) {
          //storing/writing token in localstorage
          localStorage.setItem("token", token);
        }
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          setUser(result.data); // 2s
          navigate("/profile"); // 1s
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" /> <br />
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" /> <br />
        <button>Login</button>
      </form>
    </div>
  );
}
