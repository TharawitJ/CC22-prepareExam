import {NavLink} from "react-router"

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center items-center p-5 gap-4">
        <NavLink to="/">Home</NavLink> |{" "}
        {/* <NavLink to="/Post">Post</NavLink> |{" "} */}
        <NavLink to="/Register">Register</NavLink>
      </nav>
    </>
  );
}
