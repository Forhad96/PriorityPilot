import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import { ComplexNavbar } from "../components/Header/Navbar";
import Banner from "../components/Banner/Banner";

const MainLayout = () => {
    return (
        <div>
            <ComplexNavbar/>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};
export default MainLayout;