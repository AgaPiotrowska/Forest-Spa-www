import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom"

const Navigation = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleHamburgerClick = () => {
        setShowSidebar (true);
    };

    return(
            <nav className="page-header">
                <a href="/"><img src="../images/logo.png" alt="LogoForest" className="page-header-logo"/></a>
                <button onClick={handleHamburgerClick} className="hamburger" id="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <ul onClick={() => setShowSidebar (false)} className={"nav-links" + (showSidebar ? " show" : "")} id="nav-links">
                        <li className="close-side-bar">
                            <div><img src="../images/close.svg" width="20px"/></div></li>
                        <li><NavLink to="/">Strona główna</NavLink></li>
                        <li><Link to="/offerpage">Zabiegi</Link></li>
                        <li><Link to="/pricing">Cennik</Link></li>
                        <li><Link to="/gallerypage">Galeria</Link></li>
                        <li><Link to="/team">O nas</Link></li>
                        <li><Link to="/contactpage">Kontakt</Link></li>
                </ul>
            </nav>
    )
};

export default Navigation;