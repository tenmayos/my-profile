import { Link } from "react-router-dom";

/**
 * 
 * @param {{showIndex: bool}} props
 */

export default function LinksList(props) {

    return (
        <ul>
            {props.showIndex && <li><Link to="/">Home</Link></li>}
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}