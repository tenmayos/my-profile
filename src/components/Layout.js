import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function Layout(props) {

    if (useLocation().pathname === "/") {
        return props.children;
    }

    return (
        <>
        <Navbar />
        {props.children}
        <Footer />
        </>
    );
}