import { AiFillCar, AiOutlineHeart } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs"

const WhyChooseUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
            <div className="bg-[#2b3440] text-white px-4 py-10 rounded-md" >

                <h2 className="text-center text-2xl md:text-3xl font-medium text-[#ff5a25]">Why Choose Us</h2>

                {/* main card div */}
                {/* variety of car brands*/}
                <div className="flex flex-col lg:flex-row gap-5 mt-5" >

                    <div className="space-y-2" >
                        <div className="text-5xl flex justify-center " >
                            <AiFillCar />
                        </div>

                        <div>
                            <h2 className="text-lg text-center" >Variety of Car Brands</h2>

                            <p className="text-base text-justify" >We offer a wide selection of car brands, including BMW, Toyota, Mercedes, Tesla, and more...</p>
                        </div>
                    </div>

                    {/* best rate*/}
                    <div className="space-y-2">
                        <div className="text-5xl flex justify-center" >
                            <BsEmojiSmile />
                        </div>

                        <div>
                            <h2 className="text-lg text-center" >Best Rate Guarantee</h2>

                            <p className="text-base text-justify" >
                                Experience our Best Rate Guarantee, ensuring you receive the most competitive rates on the market.</p>
                        </div>
                    </div>

                    {/* card */}
                    <div className="space-y-2">
                        <div className="text-5xl flex justify-center" >
                            <AiOutlineHeart />
                        </div>

                        <div>
                            <h2 className="text-lg text-center " >Awesome Customer Support</h2>

                            <p className="text-base text-justify" >Count on our Awesome Customer Support for top-notch assistance and satisfaction with every interaction.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WhyChooseUs;