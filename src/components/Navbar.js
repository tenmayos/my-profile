import { Link } from "react-router-dom"
import "../styles/App.css"

export default function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/" className="site-title">
                Bassam
            </Link>
            <ul>
                <li className="active">
                    <Link to="/about">About me</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}