import { Link } from "react-router-dom"
import "../styles/App.css"
import LinksList from "./LinksList"
import { useLocation } from "react-router-dom"

export default function Navbar() {

    const location = useLocation();
    
    if (location.pathname === "/") {
        return null;
    }
    
    return (
        <nav className="navigation">
            <Link to="/" className="site-title">
                Bassam
            </Link>
            <LinksList />
        </nav>
    )
}