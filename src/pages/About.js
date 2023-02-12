import BackgroundSection from "../components/AboutSections/BackgroundSection";
import EducationSection from "../components/AboutSections/EducationSection";
import MainSkillsSection from "../components/AboutSections/MainSkillsSection";
import OtherSkillsSection from "../components/AboutSections/OtherSkillsSection";
import "../styles/About.css";

export default function About() {

    return (
        <>
            <section className="intro-section">
                <h1 className="intro-header">
                    I'm Bassam Saleh
                </h1>
                <h3 className="intro-desc">
                    Programmer and Video games enthusiast
                </h3>

            </section>
            <BackgroundSection />
            <EducationSection />
            <MainSkillsSection />
            <OtherSkillsSection />
        </>
    );
}