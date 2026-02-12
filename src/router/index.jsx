import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/profile";
import TokenProfile from "../pages/TokenProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "Profile", element: <Profile /> },
      { path: "Token-Profile", element: <TokenProfile /> },
    ],
  },
]);
export default router;
