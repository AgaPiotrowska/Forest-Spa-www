import React from "react";
import Offer1 from "./Offer1"

const OffersAll = ({offerTitle, offerPicture, offerLink}) => {
    return (
        <div>
                    <div className="row">
                        <Offer1 offerTitle="Kosmetyka twarzy" offerPicture="images/forest-183.jpg" offerLink="kosmetyka-twarzy"/>
                        <Offer1 offerTitle="Pielęgnacja dłoni i stóp" offerPicture="images/forest-109.jpg" offerLink="kosmetyka-dloni-i-stop"/>
                        <Offer1 offerTitle="Masaże" offerPicture="images/forest-133.jpg" offerLink="masaze"/>
                        <Offer1 offerTitle="Kosmetologia estetyczna" offerPicture="images/forest-146.jpg" offerLink="kosmetologia-estetyczna"/>
                    </div>
                    <div className="row">
                        <Offer1 offerTitle="Depilacja systemem lycon" offerPicture="images/forest-115.jpg" offerLink="depilacja-systemem-lycon"/>
                        <Offer1 offerTitle="Zabiegi na ciało" offerPicture="images/forest-23.jpg" offerLink="zabiegi-na-cialo"/>
                        <Offer1 offerTitle="Makijaż permanentny" offerPicture="images/forest-185.jpg" offerLink="makijaz-permanentny"/>
                        <Offer1 offerTitle="Pielęgnacja oprawy oka" offerPicture="images/forest-137.jpg" offerLink="pielegnacja-oprawy-oka"/>
                    </div>
        </div>
)};

export default OffersAll;