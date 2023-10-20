import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BsEyeSlash, BsEye } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const photoUrl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value
        const terms = event.target.terms.checked
        console.log(name, photoUrl);

        if (!terms) {
            return toast.error('Please aceapt the terms and condition.')
        }

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters or too long')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Please make sure your password has at least one capital letter')
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|'"\-=]/.test(password)) {
            return toast.error('Please make sure at least one special character')
        }


        // create user with email and password
        createUser(email, password)
            .then(() => {
                navigate("/")
                return toast.success('Your account has been created successfully!')
            })
            .catch((error) => {
                return toast.error(error.message);
            })

    }
    return (
        <div className="my-10" >
            {/* Start signup  */}
            <div className="flex justify-center items-center  lg:h-[70vh]" >

                <div className="w-[300px] h-[550px]  border-[1px] border-[#ff5a25] rounded-sm" >
                    <h2 className="text-xl font-semibold text-center mt-5 text-[#ff5a25]" >SignUp your account</h2>

                    <div className="px-5 my-5">
                        <hr className="border-[#ff5a25]" />
                    </div>

                    <form onSubmit={handleSignUp} className="px-4 space-y-2" >

                        {/* name */}
                        <p className='text-[#403F3F] text-base font-semibold'>Your Name</p>
                        <input type="text" name="name" placeholder="Enter your name" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />


                        {/* pthto url */}
                        <p className='text-[#403F3F] text-base font-semibold'>Photo URL</p>
                        <input type="text" name="photourl" placeholder="Enter your photo url" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" />


                        {/* email */}
                        <p className='text-[#403F3F] text-base font-semibold'>Email Address</p>
                        <input type="email" name="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />


                        {/* password */}
                        <p className='text-[#403F3F] text-base font-semibold' >Password</p>

                        <div className="flex justify-end items-center" >
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />

                            <span className="absolute px-2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <BsEye /> : <BsEyeSlash />}</span>
                        </div>

                        {/* terms and condition */}
                        <div className="py-2" >
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms" className="ml-2 text-[#706F6F] text-base">Accept <Link to="#" ><span className="font-semibold underline" >Terms & Conditions</span></Link></label>
                        </div>

                        {/* login button */}
                        <div className="pt-2" >
                            <input type="submit" value="Register" className="bg-[#403F3F] w-full py-2 rounded-sm text-white font-semibold text-base cursor-pointer hover:bg-[#272530] delay-100 transition-all" />
                        </div>

                        {/* login link */}

                        <p className="text-[12px]  text-center font-semibold text-[#706F6F]" >Already have an account? <Link to="/login" ><span className="text-[#ff5a25]" >Login</span></Link></p>





                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;