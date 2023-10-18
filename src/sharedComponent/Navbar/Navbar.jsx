import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                <div>
                    <button>Login</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;