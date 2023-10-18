import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponent/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>

            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Outlet */}
            <div>
                <Outlet />
            </div>


            <div>
                <Toaster />
            </div>


        </div>
    );
};

export default MainLayout;