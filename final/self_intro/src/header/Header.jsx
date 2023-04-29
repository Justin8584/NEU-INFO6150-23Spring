import "./Header.css";
import GlobalNav from "./GlobalNav";
import mySelfie from '../image/IMG_1976 Background Removed.png';

function Header({ setPage }) {
    return (
        <header className="header">

            <a className="header__skip" href="#main">Skip to Content</a>
            <GlobalNav className="header__nav" setPage={setPage} />
            <img
                className="header_img"
                src={mySelfie}
                alt="My Selfie"
            />
            <h1 className="header-title__main">
                Welcome to Justin's Portfolio!
            </h1>
            <h2 className="header-title__secondary">
                Mechanical and Software Engineer
            </h2>

        </header>
    );
}
export default Header;