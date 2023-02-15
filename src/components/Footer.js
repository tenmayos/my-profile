import OuterLink from "./OuterLink";
import "../styles/App.css";
import "../styles/Footer.css";

export default function Footer() {

    const startYear = 2023;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <p>© Bassam Saleh {startYear}-{currentYear}</p>

            {/* Discord add link */}
            <OuterLink destination="https://discordapp.com/users/165250441230155776" className="clickable"
            content=<i className="fa-brands fa-discord fa-lg margin"></i> />
            
            {/* Github profile link */}
            <OuterLink destination="https://github.com/tenmayos" className="clickable"
            content=<i className="fa-brands fa-github fa-lg margin"></i> />
            
            {/* LinkedIn profile link */}
            <OuterLink destination="https://www.linkedin.com/in/bassam-al-nezi-520940164/" className="clickable"
            content=<i className="fa-brands fa-linkedin fa-lg margin"></i> />
        </footer>
    );
}