import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandsCard = ({ data }) => {
    // console.log(data);
    const { brand_name, pic } = data || {}
    // console.log(id);
    return (
        <div>

            <Link to={`/product/${brand_name}`} >
                
                <div>
                    <div className="rounded-md p-4  shadow-lg space-y-2" >

                        <div className="border-2 border-[#afafb7] rounded-md  " >
                            <img className="w-full h-60   " src={pic} />
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-[#afafb7]" >{brand_name}</h2>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

BrandsCard.propTypes = {
    data: PropTypes.object
}

export default BrandsCard;