import { Outlet } from "react-router-dom"
import ScrollToTop from "../scrollToTop"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



function MainLayout() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout