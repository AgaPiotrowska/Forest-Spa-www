import React from "react";

import Header from "./Header";
import OffersAll from "./OffersAll";

const OfferPage = ({header}) => {
    return (
        <div>
            <Header header="Zabiegi pielęgnacyjne"/>
            <OffersAll/>
        </div>
    )};
export default OfferPage;