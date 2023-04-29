import globalNavMenu from "./globalNavMenu";
import { useState } from 'react';
import "./GlobalNav.css";

function GlobalNav({ className, setPage }) {

    const [showMenu, hideMenu] = useState(false);

    const list = globalNavMenu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    className="global-nav__link"
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

    const menuClass = showMenu ? "global-nav__list--open" : "";

    return (
        <nav className={`global-nav ${className}`}>

            <div className="global-nav__toggle" onClick={() => hideMenu(!showMenu)}>
                <i className="gg-menu"></i>
            </div>

            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;