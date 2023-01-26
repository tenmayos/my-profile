import { Link } from 'react-router-dom';
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1 className='greeting'>Hello!</h1>
            <h1 className='phrase'>How can i help?</h1>
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
        </div>
        
    );
}