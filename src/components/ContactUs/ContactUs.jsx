
const ContactUs = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
            {/* main div */}
            <div>

                <div>

                    <hr className="border-[1px] border-[#ff5a25]" />

                    <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold" ><span className="text-[#ff5a25]" >Contact</span> Us</h2>

                    <hr className="border-[1px] border-[#ff5a25]" />

                    <div className="flex flex-col md:flex-row mt-5 ">

                        <div className="flex-1 rounded-md" >
                            <img className="h-full rounded-md "  src="https://i.ibb.co/j67ZnRB/young-sales-woman-carshowroom-standing-by-car.jpg" />
                        </div>


                        <div className="flex-1" >
                            <div className=" rounded-md border-[1px] md:border-none border-[#ff5a25] mt-2 md:mt-0" >

                                <form className="px-4  space-y-2 " >

                                    <div className="flex flex-col items-center justify-between" >


                                        {/* first name */}
                                        <div className="w-full" >
                                            <div>
                                                <p className='text-[#403F3F] text-base font-semibold'>First Name:</p>
                                            </div>

                                            <div>
                                                <input type="text" name="text" placeholder="Enter your first name" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />
                                            </div>
                                        </div>


                                        {/* last name */}
                                        <div className="w-full" >
                                            <div>
                                                <p className='text-[#403F3F] text-base font-semibold'>Last Name:</p>
                                            </div>

                                            <div>
                                                <input type="text" name="text" placeholder="Enter your last name" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" />
                                            </div>
                                        </div>
                                    </div>


                                    {/* email */}
                                    <p className='text-[#403F3F] text-base font-semibold' >Email Address:</p>
                                    <input type="email" name="email" placeholder="Enter your e-mail address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />


                                    {/* phone  */}
                                    <p className='text-[#403F3F] text-base font-semibold' >Phone Number:</p>
                                    <input type="number" name="number" placeholder="Enter your phone number" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" />

                                    {/* message */}
                                    <div className="pt-2" >
                                        <textarea className="bg-[#F3F3F3] outline-none resize-none p-4 w-full rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] " name="" id="" rows="6" placeholder="Enter your message..."></textarea>
                                    </div>

                                    {/* submit button */}
                                    <div className=" text-center" >
                                        <input type="submit" value="Submit" className="bg-[#2b3440] hover:bg-[#272530] transition-all delay-100 px-10 py-2 rounded-sm text-white font-semibold text-base cursor-pointer w-full" />
                                    </div>








                                </form>

                            </div>
                        </div>


                    </div>






                </div>
            </div>
        </div>
    );
};

export default ContactUs;