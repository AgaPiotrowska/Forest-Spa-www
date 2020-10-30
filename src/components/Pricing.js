import React from "react";
import Header from "./Header";
import PriceContainer from "./PriceContainer";

const Pricing = ({categoryName, treatmentName, treatmentPrice, header}) => {
    return (
        <div className="pricing-page">
            <Header header="Cennik"/>
            <div>
                <PriceContainer/>
            </div>
        </div>
    )};

export default Pricing;