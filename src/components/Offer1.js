import React from "react";

const Offer1 = ({offerTitle, offerPicture, offerLink}) => {
    return (
        <div>
            <div className="col-4-12">
                <div className="box">
                    <a href={"./offerpage/" + offerLink}><h2 className="box-title">{offerTitle}</h2></a>
                    <a href={"./offerpage/" + offerLink}><img src={offerPicture} className="box-image"/></a>
                </div>
            </div>
        </div>
    )};

export default Offer1;
