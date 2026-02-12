import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center items-center p-5 gap-4">
        <NavLink to="/">Home</NavLink> | <NavLink to="/Login">Login</NavLink> |{" "}
        <NavLink to="/Register">Register</NavLink> |{" "}
        <NavLink to="/Profile">Profile</NavLink> |{" "}
        <NavLink to="/Token-Profile">Token</NavLink>
      </nav>
    </>
  );
}
