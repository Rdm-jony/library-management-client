import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../LayOut/LayOut";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddBook from "../../Pages/AddBook/AddBook";
import BooksDetails from "../../Pages/BookDetails/BooksDetails";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import BorrowBooks from "../../Pages/BorrowedBook/BorrowBooks";

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
            },
            {
                path: "/books/:id",
                loader: ({ params }) => fetch(`https://library-management-server-bice.vercel.app/books/${params.id}`),
                element: <BooksDetails></BooksDetails>
            },
            {
                path: "/allBooks",
                element: <AllBooks></AllBooks>
            },
            {
                path: '/myBook',
                element: <BorrowBooks></BorrowBooks>
            }
        ]
    }
])