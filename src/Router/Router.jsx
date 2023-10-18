import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home/Home';
import AddProduct from './../pages/AddProduct/AddProduct';
import MyCart from './../pages/MyCart/MyCart';
import Product from "../Product/Product";

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
                element: <MyCart />
            },
            {
                path: "/product/:brandName",
                loader:()=>fetch("http://localhost:3000/products"),
                element: <Product />
            }
        ]
    }
])
export default Router