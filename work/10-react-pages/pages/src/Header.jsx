import GlobalNav from "./GlobalNav";
import "./Header.css";

function Header({ setPage }) {
    return (
        <header className="header">
            <img
                src="http://placekitten.com/100/100?image=1"
                className="header__logo"
                alt="My Page Logo"
            />
            <h1 className="header__title">
                Welcome to the My Pages!
            </h1>
            <GlobalNav className="header__nav" setPage={setPage} />
        </header>
    );
}

export default Header;