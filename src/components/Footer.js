import React from "react";

import Telephone from "./Telephone";
import Address from "./Address";
import SocialMediaIcons from "./SocialMediaIcons";
import OpeningHours from "./OpeningHous";

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                        <div className="contact-details">
                            <span><strong>Kontakt</strong></span>
                            <Address/>
                            <br/>
                            <Telephone/>
                        </div>
                <OpeningHours/>
                <SocialMediaIcons/>
            </div>
            <div className="footer-final">
                <h6>&#169;2020 Agnieszka Piotrowska</h6>
            </div>
        </>
)};

export default Footer;