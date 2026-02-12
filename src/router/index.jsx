import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home"
import Post from "../pages/Post"
import Register from "../pages/Register"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/Post/:username", element: <Post /> },
            { path: "Register", element: <Register /> },
        ],
    },
]);
export default router;
