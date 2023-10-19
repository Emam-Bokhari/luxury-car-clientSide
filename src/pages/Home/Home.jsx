import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brands from "./Brands/Brands";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const brandsData = useLoaderData()
    // console.log(brandsData);
    return (
        <div className="" >

            {/* Banner */}
            <div>
                <Banner />
            </div>

            {/* Brands Card */}
            <div>
                <Brands data={brandsData} />
            </div>

            {/* Contact Us */}
            <ContactUs />

            {/* Footer */}
            <Footer />


        </div>
    );
};

export default Home;