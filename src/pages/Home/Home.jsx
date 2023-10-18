import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "./Brands/Brands";

const Home = () => {
    const brandsData = useLoaderData()
    // console.log(brandsData);
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >

            {/* Banner */}
            <div>
                <Banner />
            </div>

            <div>
                <Brands data={brandsData} />
            </div>


        </div>
    );
};

export default Home;