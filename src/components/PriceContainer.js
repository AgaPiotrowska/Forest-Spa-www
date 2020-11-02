import React from "react";
import {dataTreatment} from "../data/dataTreatment";

        const PriceContainer = ({categoryName, treatmentName, treatmentPrice}) => {
        return (
                <div className="price-container">
                    {dataTreatment.map((data) => {
                    return (
                        <div className="category-group">
                                <div className="category-name">
                                    {data.categoryName}
                                </div>
                                <div>
                                {data.categoryTreatments.map((treatment) => {
                                return (
                                    <div className="treatment-row">
                                            <div>
                                                {treatment.treatmentName}
                                            </div>
                                            <div className="treatment-price">
                                            {treatment.treatmentPrice}
                                            </div>
                                     </div>

                                )})} </div>
                        </div>
                )
                })}
            </div>
        )};

export default PriceContainer;

