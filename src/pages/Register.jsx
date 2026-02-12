import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {toast} from 'react-toastify'

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const inputStyle = "border rounded-xl pl-3";
  const nagivate = useNavigate();

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const resp = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );
      toast.success("Register Successfully");
      nagivate(`/post/${formData.username}`);
    } 
    catch (error) {
      alert("POST Error");
    }
  };

  return (
    <>
      <h1 className="text-2xl m-4">Register</h1>
      <form
        onSubmit={hdlSubmit}
        className="flex flex-col gap-2 mb-3 ml-3 max-w-80 "
      >
        <label htmlFor="">Username</label>
        <input
          name="username"
          value={formData.username}
          type="text"
          placeholder="Username"
          className={inputStyle}
          onChange={(evt) => hdlChange(evt)}
        />
        <label htmlFor="">Password</label>
        <input
          name="password"
          value={formData.password}
          type="password"
          placeholder="Password"
          className={inputStyle}
          onChange={(evt) => hdlChange(evt)}
        />
        <label htmlFor="">Email</label>
        <input
          name="email"
          value={formData.email}
          type="Email"
          placeholder="abcd@email.com"
          className={inputStyle}
          onChange={(evt) => hdlChange(evt)}
        />
        <label htmlFor="">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          type="text"
          placeholder="012-3456789"
          className={inputStyle}
          onChange={(evt) => hdlChange(evt)}
        />
        <div className="justify-center items-center flex mt-3">
          <button className="border rounded-xl w-30 hover:bg-blue-100 ">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
