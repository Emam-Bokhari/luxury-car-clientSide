import { useLoaderData } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Details = () => {

    const detailsData = useLoaderData()
    // console.log(detailsData);
    const { name, brandName, type, rating, photoURL, price, productDescription
    } = detailsData || {}
    
    const addToCart={name,brandName,price}
    // console.log(addToCart);
    
   const handleAddToCart=()=>{
    fetch("http://localhost:3000/cart",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addToCart)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    console.log(addToCart);
   }
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >

            {/* image */}
            <div>
                <img className="w-full h-[250px]  md:h-[550px] lg:h-[700px]" src={photoURL} />
            </div>

            {/* text */}
            <div className="space-y-1" >
                {/* name and brand name */}
                <div className="mt-5 flex justify-between text-lg text-[#afafb7] font-semibold"  >
                    <h2><span className="text-[#ff5a25]" >Name: </span>{name}</h2>
                    <p><span className="text-[#ff5a25]">Brand Name:</span> {brandName}</p>
                </div>

                {/* type and rating */}
                <div className="flex justify-between text-lg  text-[#afafb7] font-semibold" >
                    <h2><span className="text-[#ff5a25]">Type: </span>{type}</h2>
                    <p><span className="text-[#ff5a25]">Ratings: </span>{rating}</p>
                </div>

                <div className="text-base font-bold " >
                    <p><span className="text-[#ff5a25]">Price:</span> ${price} USD</p>
                </div>
            </div>

            <div onClick={handleAddToCart} className="my-5">
                <button className="bg-[#a0d340] text-lg px-3 py-1 rounded-sm font-bold text-white flex items-center gap-2" >Add To Cart <div className="text-xl" ><AiOutlineShoppingCart /></div></button>
            </div>

            <div className="my-5 text-base font-bold text-[#afafb7] text-justify">
                <p><span className="text-[#ff5a25] text-lg">Product Description: </span>{productDescription}</p>
            </div>

        </div>
    );
};

export default Details;