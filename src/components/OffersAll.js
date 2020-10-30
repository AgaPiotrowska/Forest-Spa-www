import React from "react";
import Offer1 from "./Offer1"
import { Link } from 'react-router-dom';

const OffersAll = ({offerTitle, offerPicture, offerLink}) => {
    return (
        <div>
                    <div className="row">
                        <Offer1 offerTitle="Kosmetyka twarzy" offerPicture="images/forest spa-183.jpg" offerLink="/kosmetykatwarzy"/>
                        <Offer1 offerTitle="Pielęgnacja dłoni i stóp" offerPicture="images/forest spa-109.jpg" offerLink="#"/>
                        <Offer1 offerTitle="Masaże" offerPicture="images/forest spa-133.jpg" offerLink="#"/>
                        <Offer1 offerTitle="Kosmetologia estetyczna" offerPicture="images/forest spa-146.jpg" offerLink="#"/>
                    </div>
                    <div className="row">
                        <Offer1 offerTitle="Depilacja systemem lycon" offerPicture="images/forest spa-115.jpg" offerLink="#"/>
                        <Offer1 offerTitle="Depilacja woskiem klasycznym" offerPicture="images/forest spa-23.jpg" offerLink="#"/>
                        <Offer1 offerTitle="Makijaż permanentny" offerPicture="images/forest spa-185.jpg" offerLink="#"/>
                        <Offer1 offerTitle="Pielęgnacja oprawy oka" offerPicture="images/forest spa-137.jpg" offerLink="#"/>
                    </div>
        </div>
)};

export default OffersAll;