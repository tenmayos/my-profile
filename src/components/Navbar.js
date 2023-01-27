import { Link } from "react-router-dom"
import "../styles/App.css"
import LinksList from "./LinksList"

export default function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/" className="site-title">
                Bassam
            </Link>
            <LinksList />
        </nav>
    )
}