import LinksList from '../components/LinksList';
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1 className='greeting-anim'>Hello!</h1>
            <h1 className='phrase-anim'>How can i help?</h1>
            <LinksList />
        </div>
    );
}