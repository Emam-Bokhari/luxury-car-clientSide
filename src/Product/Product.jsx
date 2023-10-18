import { useLoaderData, useParams } from "react-router-dom";
import DisplayProduct from "../DisplayProduct/DisplayProduct";

const Product = () => {

    const productData = useLoaderData()
    const {brandName} = useParams()
  
    const filteredProducts = productData.filter(product => product.brandName === brandName);
    console.log(filteredProducts);

    return (
        <div>
            {filteredProducts.map((item,index) => <DisplayProduct key={index} data={item} />)}
        </div>
    );
};

export default Product;