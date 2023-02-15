import "../styles/App.css"
import LinksList from "./LinksList"

export default function Navbar() {

    return (
        <div className="topnav">
            <LinksList showIndex />
        </div>
    )
}