import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const Layouts = () => {
    return (
        <div>
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