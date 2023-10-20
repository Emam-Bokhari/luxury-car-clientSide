import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home/Home';
import AddProduct from './../pages/AddProduct/AddProduct';
import MyCart from './../pages/MyCart/MyCart';
import Product from "../Product/Product";
import Details from "../pages/Home/Details/Details";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Update from "../pages/Update/Update";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import ErrorPage from "../ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                loader: () => fetch("../brandsData.json"),
                element: <Home />
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: "/myCart",
                loader: () => fetch("https://luxury-car-self.vercel.app/cart"),
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: "/product/:brandName",
                loader: () => fetch("https://luxury-car-self.vercel.app/products"),
                element: <Product />
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`https://luxury-car-self.vercel.app/products/${params.id}`),
                element: <PrivateRoute><Details /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`https://luxury-car-self.vercel.app/products/${params.id}`),
                element: <PrivateRoute><Update /></PrivateRoute>
            }
        ]
    }
])
export default Router