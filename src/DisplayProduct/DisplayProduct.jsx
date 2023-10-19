import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const DisplayProduct = ({ data }) => {
    // console.log(data);
    const { _id , name, brandName, type, rating, photoURL, price } = data || {}
    // console.log(_id);
    return (
<div>


<div className="flex flex-col justify-center items-center min-h-full" >

<div className="border-[1px] border-[#afafb7] rounded-md w-full flex-1 " >
    {/* image */}
    <div>
        <img className="w-full h-80" src={photoURL} />
    </div>

    {/* text */}
    <div className="h-36" >
        <div className="px-4 space-y-1" >
        {/* name and brand name */}
        <div className="mt-5 flex gap-5  text-lg text-[#afafb7] font-semibold "  >

            <div className=" flex-1" >
            <h2><span className="text-[#ff5a25]" >Name: </span>{name}</h2>
            </div>

            <div className=" flex-1" >
            <p><span className="text-[#ff5a25]">Brand Name:</span> {brandName}</p>
            </div>

        </div>

        {/* type and rating */}
        <div className="flex gap-5 justify-between text-lg  text-[#afafb7] font-semibold" >
            
            <div className=" flex-1" >
            <h2><span className="text-[#ff5a25]">Type: </span>{type}</h2>
            </div>

          <div className=" flex-1" >
          <p><span className="text-[#ff5a25]">Ratings: </span>{rating}</p>
          </div>

        </div>

        <div className="text-base font-bold " >
            <p><span className="text-[#ff5a25]">Price:</span> ${price}</p>
        </div>
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
            <div className="flex-1" >
            <Link to={`/update/${_id}`} >
            <button className="bg-[#a0d340] text-xl px-3 py-1 rounded-sm font-bold text-white" >Update</button>
            </Link>
            </div>
        </div>
      

    </div>

</div>
</div>
</div>
    );
};

DisplayProduct.propTypes={
    data:PropTypes.object
}

export default DisplayProduct;