
const CartData = ({ data }) => {
    console.log(data);
    const { name, brandName, price } = data || {}
    return (
        <div>

            <div className="flex items-center gap-10 my-5" >


                <h2 className="text-xl" >&#x2022;</h2>


                {/* name */}
                <h2 className="text-lg text-[#afafb7]"><span className="text-[#ff5a25]" >Name: </span>{name}</h2>

                {/* brand name */}
                <p className="text-lg text-[#afafb7]" ><span className="text-[#ff5a25]">Brand Name:</span> {brandName}</p>

                {/* price */}
                <div className="text-base font-bold " >
                    <p className="text-lg text-[#afafb7]" ><span className="text-[#ff5a25]">Price:</span> ${price}</p>
                </div>

                {/* button */}
                <div>
                    <button className="bg-[#f00] text-xl px-3 py-1 rounded-sm font-bold text-white" >Delete</button>
                </div>
            </div>

        </div>
    );
};

export default CartData;