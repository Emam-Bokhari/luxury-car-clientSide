import BrandsCard from "../BrandsCard/BrandsCard";
import PropTypes from 'prop-types';

const Brands = ({ data }) => {
    // console.log(data);
    return (
        <div className="my-10 max-w-screen-xl mx-auto px-8 md:px-16" >

            
            <hr className="border-[1px] border-[#ff5a25]" />
            

            <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold" ><span className="text-[#ff5a25]" >Choose</span> Your Brand</h2>

            <hr className="border-[1px] border-[#ff5a25]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5" >
                {data?.map((item, index) => <BrandsCard key={index} data={item} />)}
            </div>
            
        </div>
    );
};

Brands.propTypes = {
    data: PropTypes.array
}

export default Brands;