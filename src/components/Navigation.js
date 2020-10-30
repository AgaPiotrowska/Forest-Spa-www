import React from "react";

import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom"

const Navigation = () => {
    return(
        <div>
            <header className="page-header">
                <img src="images/logo_gold.png" height="100" alt="LogoForest"/>
                <div className="main-nav">
                    <ul className="main-nav-list" id="menu">
                        <li><NavLink to="/">Strona główna</NavLink></li>
                        <li><Link to="/offerpage">Zabiegi</Link></li>
                        <li><Link to="/pricing">Cennik</Link></li>
                        <li><Link to="/gallerypage">Galeria</Link></li>
                        <li><Link to="/team">O nas</Link></li>
                        <li><Link to="/contactpage">Kontakt</Link></li>
                    </ul>
                    <button className="main-nav-toggle" aria-label="Pokaż menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </div>
    )
};

export default Navigation;