import globalNavMenu from "./globalNavMenu";
import { useState } from 'react';
import "./GlobalNav.css";

// GlobalNav to pass by className, and important, pass by the setPage from Header
function GlobalNav({ className, setPage }) {

    const [showMenu, hideMenu] = useState(false);

    /* make menu to a separate menu.js file
        const menu = [
            {
                name: "Home",
                path: "/",
            }, {
                name: "About",
                path: "/about.html",
            }, {
                name: "Cats",
                path: "/cats.html",
            }, {
                name: "Jobs",
                path: "/jobs.html",
            }
        ]; 
    */
    const list = globalNavMenu.map(item => { // map() creates a new array from calling a function for every array element.
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    className="global-nav__link"
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault(); // prevent to load the page and setPage to the clicked page nav.
                        setPage(item.name);
                    }}
                >{item.name}
                </a>
            </li>
        );
    });

    // const menuHtml = (
    //     <ul className="global-nav__list">
    //         {list}
    //     </ul>
    // );

    const menuClass = showMenu ? "global-nav__list--open" : "";

    return (
        // function returns and have two className, one in ``, another in destructor
        <nav className={`global-nav ${className}`}>

            <button className="global-nav__toggle" onClick={() => hideMenu(!showMenu)}>
                {showMenu ? "Close Menu" : "Open Menu"}
            </button>

            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>

            {/* {showMenu ? menuHtml : null} */}

        </nav>
    );
}

export default GlobalNav;

