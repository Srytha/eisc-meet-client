import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";

export const routes = [
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]

export const router = createBrowserRouter(routes);
