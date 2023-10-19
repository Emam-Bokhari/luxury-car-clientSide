import { useLoaderData } from "react-router-dom";
import CartData from "./CartData/CartData";
import { useState } from "react";

const MyCart = () => {
    const addToCartData = useLoaderData()
    // console.log(addToCartData);
    const [cart,setCart]=useState(addToCartData)

    const handleCartDelete=(cartId)=>{
        const updatedCart=cart.filter(item=>item._id!==cartId)
        setCart(updatedCart)
    }
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10 " >
            <div >
                {cart?.map((item, index) => <CartData key={index} data={item} deleteCart={handleCartDelete} />)}
            </div>
        </div>
    );
};

export default MyCart;