import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';



const Layouts = () => {




    return (
        <div>
            <Toaster></Toaster>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* dynamic content */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default Layouts;