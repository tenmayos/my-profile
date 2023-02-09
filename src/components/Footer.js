export default function Footer() {
    
    const startYear = 2023;
    const currentYear = new Date().getFullYear();

    return (
        <section className="footer-section">
        <span>© Bassam Saleh {startYear}-{currentYear}</span>
        </section>
    );
}