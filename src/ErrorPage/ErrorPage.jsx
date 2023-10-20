import Navbar from "../sharedComponent/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >

                <div>
                    <img className="rounded-md w-full  md:h-[500px] lg:h-[650px]" src="https://i.ibb.co/M1rCSQJ/error.jpg" />
                </div>

            </div>




        </div>
    );
};

export default ErrorPage;