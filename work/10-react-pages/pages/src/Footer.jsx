import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Here is my footer title! </h2>

            <ul className="footer-nav__list">
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="/contact.html">Contact Us</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="/career.html">Career</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="/news.html">News</a>
                </li>
                <li className="footer-nav__item">
                    <a className="footer-nav__link" href="/support.html">Support Us</a>
                </li>
            </ul>

            <ul className="footer-policy__list">
                <li className="footer-policy__item">
                    <a className="footer-policy__link" href="/privacy.html">Privacy</a>
                </li>
                <li className="footer-policy__item">
                    <a className="footer-policy__link" href="/patents.html">Patents</a>
                </li>
                <li className="footer-policy__item">
                    <a className="footer-policy__link" href="/copyrights.html">Copyrights</a>
                </li>
            </ul>

            <ul className="footer-social__list">
                <li className="footer-social__item">
                    <a className="footer-social__link" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                </li>
                <li className="footer-social__item">
                    <a className="footer-social__link" href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a>
                </li>
                <li className="footer-social__item">
                    <a className="footer-social__link" href="https://facebook.com" rel="noopener">Facebook</a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;

