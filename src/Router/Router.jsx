import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home/Home';
import AddProduct from './../pages/AddProduct/AddProduct';
import MyCart from './../pages/MyCart/MyCart';
import Product from "../Product/Product";
import Details from "../pages/Home/Details/Details";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch("../brandsData.json"),
                element: <Home />
            },
            {
                path: "/addProduct",
                element: <AddProduct />
            },
            {
                path: "/myCart",
                loader: () => fetch("http://localhost:3000/cart"),
                element: <MyCart />
            },
            {
                path: "/product/:brandName",
                loader: () => fetch("http://localhost:3000/products"),
                element: <Product />
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
                element: <Details />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    }
])
export default Router