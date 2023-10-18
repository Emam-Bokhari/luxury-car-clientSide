
const Banner = () => {
    return (
        <div className="relative" >
            <div >

                {/* banner image */}
                <img className="w-full rounded-md " src="https://i.ibb.co/Wv2PXR1/denhard-lee-X-ypi-Cj-OVh-I-unsplash.jpg" alt="" />

            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>

            {/* text */}
            <div className="absolute top-[50%] space-y-1 text-white w-full text-center left-[50%]" style={{ transform: 'translate(-50%,-50%)' }} >

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Find Best Car & Limousine</h2>

                <p className="font-medium tracking-wide md:tracking-wider lg:tracking-widest text-base md:text-lg" >From as low as $10 per day with limited time offer discounts
                </p>
            </div>
        </div>
    );
};

export default Banner;