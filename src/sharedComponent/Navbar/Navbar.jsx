import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6"
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {

        logout()
            .then(() => {
                return toast.success('Logout Successful!');
            })
            .catch((error) => {
                return toast.error(error.message);
            })
    }
    return (
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 my-10" >
            <nav className="shadow-lg rounded-md flex flex-col md:flex-row flex-wrap justify-between items-center px-4 py-6" >

                {/* logo */}
                <div>
                    <img className="w-24 md:w-28 lg:w-32" src="https://i.ibb.co/ysBDRfB/logo.png" alt="" />
                </div>

                {/* navlink */}
                <ul className="flex flex-wrap gap-5 text-lg text-[#afafb7] font-semibold" >

                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff5c16] underline" : ""
                        }
                    >
                        Home
                    </NavLink></li>

                    <li><NavLink
                        to="/addProduct"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff5c16] underline" : ""
                        }
                    >
                        Add Product
                    </NavLink></li>
                    <li><NavLink
                        to="/myCart"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff5c16] underline " : ""
                        }
                    >
                        My Cart
                    </NavLink></li>

                 
                </ul>

                {/* button */}
                {user ? (
                    <div className="space-y-2">
                        <div className="flex gap-3 items-center ">
                            {user.photoURL ? (
                                <img
                                    className="w-9 h-9 rounded-full border-2 border-gray-300"
                                    src={user.photoURL}

                                />
                            ) : (
                                <FaCircleUser className="text-3xl" />
                            )}
                            <p>{user.displayName || "User"}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-[#ff5a25] hover:bg-[#ff7f4c] transition-all delay-200 ease-in px-3 py-1 rounded-sm text-white font-semibold text-lg"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3 items-center">
                        <FaCircleUser className="text-3xl" />
                        <Link to="/login">
                            <button className="bg-[#afafb7] px-2 py-1 rounded-sm text-lg font-bold text-black tracking-wide">
                                Login
                            </button>
                        </Link>
                    </div>
                )}

            </nav>
        </div>
    );
};

export default Navbar;