import footerNavMenu from "./footerNavMenu";
import "./FooterNav.css";

function FooterNav({ setPage }) {

    const list = footerNavMenu.map(item => {
        return (
            <li className="footer-nav__item" key={item.name}>
                <a
                    className="footer-nav__link"
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }}
                >{item.name}
                </a>
            </li>
        );
    });

    return (
        <nav className="footer-nav">
            <ul className="footer-nav__list">
                {list}
            </ul>
        </nav>
    );

};
export default FooterNav;