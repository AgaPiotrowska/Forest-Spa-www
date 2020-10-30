import React from "react";
import {dataTreatment} from "../data/dataTreatment";

        const PriceContainer = ({categoryName, treatmentName, treatmentPrice}) => {
        return (
                <div className="price-container">
                    {dataTreatment.map((data) => {
                    return (
                    <div>
                        {data.categoryName +
                        " , " +
                        data.categoryTreatments.treatmentName +
                        " ," +
                        data.categoryTreatments.treatmentPrice
                        }
                    </div>
                )
                })}
            </div>
        )};

export default PriceContainer;

