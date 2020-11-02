import React from "react";
import { useParams } from "react-router-dom";

export const Treatments = [
    {
        id: 'kosmetyka-twarzy',
        photo: '../images/forest-183.jpg',
        title: 'Kosmetyka twarzy',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'kosmetyka-dloni-i-stop',
        photo: '../images/forest-109.jpg',
        title: 'Kosmetyka dłoni i stóp',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'masaze',
        photo: '../images/forest-133.jpg',
        title: 'Masaże',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'kosmetologia-estetyczna',
        photo: '../images/forest-146.jpg',
        title: 'Kosmetologia estetyczna',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'depilacja-systemem-lycon',
        photo: '../images/forest-115.jpg',
        title: 'Depilacja systemem lycon',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'depilacja-woskiem-klasycznym',
        photo: '../images/forest-23.jpg',
        title: 'Depilacja woskiem klasycznym',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'makijaz-permanentny',
        photo: '../images/forest-185.jpg',
        title: 'Makijaż permanentny',
        description: 'jdhfjdahfjfjnfcj'
    },
    {
        id: 'pielegnacja-oprawy-oka',
        photo: '../images/forest-137.jpg',
        title: 'Kosmetyka twarzy',
        description: 'jdhfjdahfjfjnfcj'
    },
];

    const TreatmentDescription = ()=> {
        let { treatmentID } = useParams();
        const treatment = Treatments.find(t => t.id === treatmentID);
     return (
        <div>
            <div className="container-about-treatment">
                <img src={treatment.photo} className="about-image"/>
                <div className="container-title-treatment">
                    <h2 className="about-title">{treatment.title}</h2>
                    <p className="about-description">{treatment.description}</p>
                </div>
            </div>
        </div>
    )};

export default TreatmentDescription;
