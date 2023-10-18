import { useLoaderData } from "react-router-dom";
import CartData from "./CartData/CartData";

const MyCart = () => {
    const addToCartData = useLoaderData()
    // console.log(addToCartData);
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10 " >
            <div >
                {addToCartData?.map((item, index) => <CartData key={index} data={item} />)}
            </div>
        </div>
    );
};

export default MyCart;