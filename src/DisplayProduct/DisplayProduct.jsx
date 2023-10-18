import { Link } from "react-router-dom";

const DisplayProduct = ({ data }) => {
    // console.log(data);
    const { _id , name, brandName, type, rating, photoURL, price } = data || {}
    // console.log(_id);
    return (
        <div>

            <div className="border-[1px] border-[#afafb7] rounded-md" >
                {/* image */}
                <div>
                    <img className="w-full h-80" src={photoURL} />
                </div>

                {/* text */}
                <div className="px-4 space-y-1" >
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
                        <p><span className="text-[#ff5a25]">Price:</span> ${price}</p>
                    </div>
                </div>

                {/* button */}
                <div className="px-4 my-5 flex justify-between" >

                    {/* details button */}
                    <Link to={`/details/${_id}`} >
                    <div>
                        <button className="bg-[#ff5a25] text-xl px-3 py-1 rounded-sm font-bold text-white" >Details</button>
                    </div>
                    </Link>

                    {/* update button */}
                    <div>
                        <button className="bg-[#a0d340] text-xl px-3 py-1 rounded-sm font-bold text-white" >Update</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DisplayProduct;