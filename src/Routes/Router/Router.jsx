import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../LayOut/LayOut";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddBook from "../../Pages/AddBook/AddBook";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/logIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addBook",
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            }
        ]
    }
])