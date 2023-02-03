import "../../styles/About.css";

export default function EducationSection() {
    return (
        <section className="about-section dark-blue-bg">
            <h1 className="section-header">Education</h1>
            <p className="center"><u>Oct 2018 - May 2021</u></p>
            <p className="center">Bachelor's Degree in Management Information Systems <strong>(MIS)</strong></p>
            <p className="center">Alexandria University, Alexandria <strong>(Egypt)</strong></p>
            <div className="img-container">
                <a href="https://alexu.edu.eg/index.php/en/" rel="noreferrer noopener" target="_blank">
                    <img src="images/AlexUni_logo.png" alt="University's logo" />
                </a>
            </div>
        </section>
    );
}