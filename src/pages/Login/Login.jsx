import { useContext, useState } from "react";
import { BsEyeSlash, BsEye, BsGoogle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signin, googleSignin } = useContext(AuthContext)

    console.log(googleSignin);

    const navigate = useNavigate()

    const handleSignin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signin(email, password)
            .then(() => {
                navigate("/")
                return toast.success('Login Successfull!')

            })
            .catch((error) => {
                return toast.error(error.message)
            })

    }
    const handleGoogleSignin = () => {
        googleSignin()
            .then(() => {
                navigate("/")
                return toast.success('Login Successful by Google')

            })
            .catch()
    }
    return (
        <div className="my-10">
            {/* Start login */}
            <div className="flex justify-center items-center  md:h-[70vh]" >

                <div className="w-[300px] h-[400px]  border-[1px] border-[#ff5a25] rounded-sm" >
                    <h2 className="text-[#ff5a25] text-xl font-semibold text-center mt-5" >Login your account</h2>

                    <div className="px-5 my-5">
                        <hr className=" border-[#ff5a25]" />
                    </div>

                    <form onSubmit={handleSignin} className="px-4 space-y-2" >
                        {/* email */}
                        <p className='text-[#403F3F] text-base font-semibold'>Email Address</p>
                        <input type="email" name="email" placeholder="Enter your email address" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#9F9F9F] outline-none" required />

                        {/* password */}
                        <p className='text-[#403F3F] text-base font-semibold' >Password</p>

                        <div className="flex justify-end items-center" >
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="bg-[#F3F3F3] w-full py-2 px-2 rounded-sm placeholder:text-sm placeholder:text-[#e3c7c7] outline-none" required />

                            <span className="absolute px-2" onClick={() => setShowPassword(!showPassword)} >{showPassword ? <BsEye /> : <BsEyeSlash />}</span>
                        </div>

                        {/* login button */}
                        <div className="pt-2" >
                            <input type="submit" value="Login" className="bg-[#403F3F] w-full py-2 rounded-sm text-white font-semibold text-base cursor-pointer hover:bg-[#272530] delay-100 transition-all" />
                        </div>


                        {/* signin useing google */}
                        <div onClick={handleGoogleSignin} className="pt-2 flex gap-2 items-center justify-center" >
                            <BsGoogle className="text-lg" />
                            <button className="text-[#403F3F] text-base font-semibold underline" >Sign in with Google</button>
                        </div>



                        {/* signup link */}

                        <p className="text-[12px] pt-2 text-center font-semibold text-[#706F6F]" >Don&#x3b;t Have An Account ? <Link to="/signUp" ><span className="text-[#ff5a25]" >SignUp</span></Link></p>



                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;