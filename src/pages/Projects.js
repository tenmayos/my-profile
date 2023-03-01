import '../styles/About.css';
import DJPaissaSection from '../components/ProjectsSections/DJPaissaSection.js';

export default function Projects() {
    
    return (
        <>
            <section className="intro-section text-center">
                <h1 className="intro-header">
                    My work
                </h1>
                <h3 className="intro-desc">
                    The projects I fully developed and worked on solo
                </h3>
            </section>
            <DJPaissaSection />
        </>
    );
}