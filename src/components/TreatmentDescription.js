import React from "react";
import { useParams } from "react-router-dom";

export const Treatments = [
    {
        id: 'kosmetyka-twarzy',
        photo: '../images/forest-183.jpg',
        title: 'Kosmetyka twarzy',
        description: 'Zabiegi na twarz komponujemy indywidualnie w zależności od stanu skóry, Waszych potrzeb oraz oczekiwań. Nie trzymamy się sztywno określonych procedur zabiegowych - wiedza i doświadczenie całego zespołu pozwalają na dużą elastyczność w doborze odpowiednich terapii zabiegowych. Kładziemy duży nacisk na manualne metody pracy. W ofercie znajdziecie zarówno delikatne zabiegi pielęgnacyjne jak i intensywne zabiegi chemiczne czy złuszczające. Wykonujemy mezoterapię igłową oraz mikroigłową - MikroPen este:med. Współpracujemy z takimi markami jak: Christina, Peel Mission, M.E. Line, DERME de beauté, Inspira:med i inne. Na szczególną uwagę zasługuje również nasz autorski remodeling twarzy - Tai Yang - masaż inspirowany tradycyjną medycyną chińską z elementami refleksoterapii.'
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
        description: 'Odpocznij od zgiełku miasta i codziennych trudów. Nasze gabinety masażowe wprawią Cię w błogi nastrój. Kojąca muzyka, ciepłe, pachnące oleje, wygodne podgrzewane łóżka … to i o wiele więcej czeka na Ciebie w naszym miejskim SPA. Oczywiście największym skarbem każdego masażu są nasze ręce, energia i ogromne zaangażowanie. Oferujemy Wam masaże częściowe lub całościowe: relaksacyjne, intuicyjne, gorącymi kamieniami bazaltowymi, sportowe, specjalistyczne - fizjoterapeutyczne. Naszą specjalizacją jest cudowny dwugodzinny rytuał Forest Ritual oraz autorski remodeling twarzy Tai Yang. Oferujemy również odprężające kąpiele solankowe. Stawiamy bańki, wykonujemy leczniczy masaż pleców Gua Sha inspirowany medycyną naturalną, świecujemy uszy. W ofercie nie mogło również zabraknąć królowej wśród zabiegów antycellulitowych - niezastąpionej bańki chińskiej.'
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
