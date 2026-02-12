import React, { useState } from "react";
import axios from "axios";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router";

function Login() {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state)=>state.setToken)
  const navigate = useNavigate();

  const inputStyle = "border rounded-xl pl-3";

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormLogin((prev) => ({ ...prev, [name]: value }));
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    const resp = await axios
      .post("https://dummyjson.com/auth/login", formLogin)
      .catch((err) => navigate("/Profile"));
    const { image, lastName, firstName, username, email, accessToken } = resp.data;
    // setUser to storage
    setUser({ image, lastName, firstName, username, email });
    setToken({accessToken})
    navigate("/Profile");
  };

  return (
    <>
      <div className="text-2xl m-4">Login</div>
      <form className="flex flex-col max-w-75 p-3 gap-2" onSubmit={hdlSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            name="username"
            value={formLogin.username}
            type="text"
            placeholder="Username"
            className={inputStyle}
            onChange={(evt) => hdlChange(evt)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            value={formLogin.password}
            name="password"
            type="password"
            placeholder="Password"
            className={inputStyle}
            onChange={(evt) => hdlChange(evt)}
          />
        </div>
        <div className="flex justify-center">
          <button className="rounded-xl border w-25">Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
