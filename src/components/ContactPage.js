import React from "react";

import Header from "./Header";
import Address from "./Address";
import Telephone from "./Telephone";
import ContactIcons from "./ContactIcons";
import SocialMediaIcons from "./SocialMediaIcons";
import Maps from "./Maps";
import OpeningHours from "./OpeningHous";


const ContactPage = ({header}) => {
    return (
        <div>
            <Header header="Kontakt"/>
            <ContactIcons/>
            <Address/>
            <Telephone/>
            <br/>
            <OpeningHours/>
            <SocialMediaIcons/>
            <Maps/>
        </div>
    )};

export default ContactPage;