import '../../styles/About.css';
import '../../styles/Projects.css';
import '../../styles/App.css';
import OuterLink from '../OuterLink';

export default function DJPaissaSection() {
    return (
        <section className='about-section black-bg'>
            <h1 className='section-header'>DJ Paissa</h1>
            <div className='about-desc'>
                <div className='img-container'>
                    <img style={{"borderRadius": "30%"}}className='djp-logo' src='/images/djp.png' alt='DJPaissa logo' />
                </div>
                <p><span className="secondary-color">DJPaissa</span> {' '}
                    is a Discord music bot built for the purpose of being your party companion.
                    Providing sick melodies and hawt beats to your voice chat and many more fun options!
                </p>
                <p className="secondary-color"><strong>Technologies used</strong></p>
                <ul>
                    <li>.NET 6 C#</li>
                    <li><OuterLink destination='https://dsharpplus.github.io/DSharpPlus/' content='DsharpPlus' /></li>
                    <li><OuterLink destination='https://github.com/freyacodes/Lavalink' content='Lavalink' /></li>
                    <li><OuterLink destination='https://www.mongodb.com/' content='MongoDB' /></li>
                </ul>
                <p><strong className="secondary-color">Repository Status</strong>: Private</p>
                <p><strong className="secondary-color">Future Expansions</strong>: FFXIV support</p>
            </div>
        </section>
    );

}