import "../styles/App.css"
import LinksList from "./LinksList"
import { useLocation } from "react-router-dom"

export default function Navbar() {

    const location = useLocation();

    if (location.pathname === "/") {
        return null;
    }

    return (
        <div className="topnav">
            <LinksList showIndex />
        </div>
    )
}