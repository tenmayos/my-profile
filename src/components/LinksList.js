import { Link } from "react-router-dom";

export default function LinksList() {
    return (
        <ul>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}