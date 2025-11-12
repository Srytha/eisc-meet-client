import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home";

export const routes = [
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/home",
        element: <Home />,
    }
]

export const router = createBrowserRouter(routes);
