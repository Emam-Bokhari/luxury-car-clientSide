import { useLoaderData, useParams } from "react-router-dom";
import DisplayProduct from "../DisplayProduct/DisplayProduct";
import Slider from "../components/Slider/Slider";

const Product = () => {

    const productData = useLoaderData()
    const {brandName} = useParams()
  
    const filteredProducts = productData.filter(product => product.brandName === brandName);
    console.log(filteredProducts);

    return (
       <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10 " >
        <Slider/>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
            {filteredProducts?.map((item,index) => <DisplayProduct key={index} data={item} />)}
        </div>
       </div>
    );
};

export default Product;