import { useLocation } from "react-router-dom";

export default function Footer() {

    if (useLocation().pathname === "/")
        return null;

    const startYear = 2023;
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer-section">
            <p>© Bassam Saleh {startYear}-{currentYear}</p>
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
        </section>
    );
}