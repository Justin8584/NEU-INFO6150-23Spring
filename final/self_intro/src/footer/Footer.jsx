import "./Footer.css";
import FooterNav from "./FooterNav";

function Footer({ setPage }) {
    return (
        <footer className="footer">
            <h2 className="footer-title__main">Thanks for Visiting!</h2>

            <div className="footer-content">
                <FooterNav setPage={setPage} />

                <ul className="footer-social__list">

                    <li className="footer-social__item">
                        <a className="footer-social__link" href="mailto:justinzhou0219@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="gg-mail"></i>
                        </a>
                    </li>

                    <li className="footer-social__item">
                        <a className="footer-social__link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="gg-link"></i>
                        </a>
                    </li>

                    <li className="footer-social__item">
                        <a className="footer-social__link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="gg-twitter"></i>
                        </a>
                    </li>
                    <li className="footer-social__item">
                        <a className="footer-social__link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="gg-youtube"></i>
                        </a>
                    </li>
                    <li className="footer-social__item">
                        <a className="footer-social__link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="gg-facebook"></i>
                        </a>
                    </li>
                    <li className="footer-social__item">
                        <a className="footer-social__link" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="gg-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="footer-copyright__text">2023 ©Justin All Rights Reserve! Justin's personal Portfolio</p>
        </footer>
    );
}
export default Footer;

