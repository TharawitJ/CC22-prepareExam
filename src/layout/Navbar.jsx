import {NavLink} from "react-router"

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/Post">Post</NavLink> |{" "}
        <NavLink to="/Register">Register</NavLink>
      </nav>
    </>
  );
}
