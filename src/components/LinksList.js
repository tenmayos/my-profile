import { Link } from "react-router-dom";

export default function LinksList() {
    return (
        <ul>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/about"}>Projects</Link>
            </li>
            <li>
                <Link to="/about">Contact</Link>
            </li>
        </ul>
    );
}