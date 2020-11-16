import React from "react";
import { useParams } from "react-router-dom";

export const Treatments = [
    {
        id: 'kosmetyka-twarzy',
        photo: '../images/forest-183.JPG',
        title: 'Kosmetyka twarzy',
        description: 'Zabiegi na twarz komponujemy indywidualnie w zależności od stanu skóry, Waszych potrzeb oraz oczekiwań. Nie trzymamy się sztywno określonych procedur zabiegowych - wiedza i doświadczenie całego zespołu pozwalają na dużą elastyczność w doborze odpowiednich terapii zabiegowych. Kładziemy duży nacisk na manualne metody pracy. W ofercie znajdziecie zarówno delikatne zabiegi pielęgnacyjne jak i intensywne zabiegi chemiczne czy złuszczające. Wykonujemy mezoterapię igłową oraz mikroigłową - MikroPen este:med. Współpracujemy z takimi markami jak: Christina, Peel Mission, M.E. Line, DERME de beauté, Inspira:med i inne. Na szczególną uwagę zasługuje również nasz autorski remodeling twarzy - Tai Yang - masaż inspirowany tradycyjną medycyną chińską z elementami refleksoterapii.'
    },
    {
        id: 'kosmetyka-dloni-i-stop',
        photo: '../images/forest-109.JPG',
        title: 'Kosmetyka dłoni i stóp',
        description: 'Dłonie są wizytówką człowieka. Stopy też! Pamiętaj aby dbać o nie cały rok. W Forest SPA dbamy zarówno o piękne, naturalne paznokcie jak i odpowiednią pielęgnację skóry dłoni i stóp. W naszej ofercie znajdziecie do wyboru kolory z takich firm jak OPI, Semilac oraz Orly. O aksamitną skórę dłoni i stóp dbamy wraz z rękawicami i skarpetkami kolagenowymi VOESH oraz CALLUX Pro - intensywnie działający żel przeznaczony do profesjonalnego zabiegu pedicure z formułą skomponowaną z kwasów organicznych.'
    },
    {
        id: 'masaze',
        photo: '../images/forest-133.JPG',
        title: 'Masaże',
        description: 'Odpocznij od zgiełku miasta i codziennych trudów. Nasze gabinety masażowe wprawią Cię w błogi nastrój. Kojąca muzyka, ciepłe, pachnące oleje, wygodne podgrzewane łóżka … to i o wiele więcej czeka na Ciebie w naszym miejskim SPA. Oczywiście największym skarbem każdego masażu są nasze ręce, energia i ogromne zaangażowanie. Oferujemy Wam masaże częściowe lub całościowe: relaksacyjne, intuicyjne, gorącymi kamieniami bazaltowymi, sportowe, specjalistyczne - fizjoterapeutyczne. Naszą specjalizacją jest cudowny dwugodzinny rytuał Forest Ritual oraz autorski remodeling twarzy Tai Yang. Oferujemy również odprężające kąpiele solankowe. Stawiamy bańki, wykonujemy leczniczy masaż pleców Gua Sha inspirowany medycyną naturalną, świecujemy uszy. W ofercie nie mogło również zabraknąć królowej wśród zabiegów antycellulitowych - niezastąpionej bańki chińskiej.'
    },
    {
        id: 'kosmetologia-estetyczna',
        photo: '../images/forest-146.JPG',
        title: 'Kosmetologia estetyczna',
        description: 'Ideą naszego salonu jest dbałość o przywrócenie pięknego, a przede wszystkim naturalnego wyglądu. Opracowujemy idealnie dobrany zestaw zabiegowy tak, aby zmaksymalizować efekty i osiągnąć je w jak najkrótszym czasie. Dzięki zabiegom z zastosowaniem usieciowanego kwasu hialuronowego możemy uwydatnić i nawilżyć usta, skorygować owal twarzy, wygładzić bruzdy nosowo-wargowe oraz linie marionetki, a także wypełnić drobne zmarszczki. Efekty zabiegu są niemal natychmiastowe i utrzymują się od 6 do 12 miesięcy. Zabiegi mezoterapii to idealny sposób na odmłodzenie, rewitalizację i głębokie nawilżenie skóry twarzy, szyi i dekoltu, a także stymulację skóry głowy. Stosowane przez nas preparaty są najwyższej jakości i spełniają wszystkie kryteria bezpieczeństwa.'
    },
    {
        id: 'depilacja-systemem-lycon',
        photo: '../images/forest-115.JPG',
        title: 'Depilacja systemem lycon',
        description: 'Marzysz o gładkiej skórze? Z nami osiągniesz ten cel (prawie) bezboleśnie. Zabiegi odbywają się w miłej i dyskretnej atmosferze, w higienicznych warunkach. Od lat współpracujemy z marką Lycon. Jest to nasz wosk do zadań specjalnych, do miejsc szczególnie delikatach i wrażliwych tj. bikini, pachy, wąsik, brwi. To doskonale opracowany system, tak aby zabieg był w najwyższym stopniu skuteczny, jak najmniej bolesny. Niska temperatura topnienia w połączeniu z delikatną recepturą dodają woskom odżywczo-regenerujących właściwości. Zabiegi z wykorzystaniem wosków Lycon pozostawiają skórę gładką i delikatną w dotyku. Na większych powierzchniach wykonujemy depilację paskowymi woskami naturalnymi lub miodowymi.'
    },
    {
        id: 'zabiegi-na-cialo',
        photo: '../images/forest-23.JPG',
        title: 'Zabiegi na ciało',
        description: 'Nasze zabiegi na ciało to Terapie i Rytuały o rozmaitych właściwościach pielęgnacyjnych. Naturalne składniki kosmetyków do ciała Organique zapewniają skórze zróżnicowaną pielęgnację i ochronę przed utratą nawilżenia. Zabiegi wzbogacamy kąpielami w wannie z solą bocheńską i solami aromaterapeutycznymi.'
    },
    {
        id: 'makijaz-permanentny',
        photo: '../images/forest-185.JPG',
        title: 'Makijaż permanentny',
        description: 'Nasz sekret na trwałą korekcję nieidealnych brwi bądź ust - makijaż permanentny. W naszym salonie wykonywany zawsze w naturalny sposób tak aby zdobił twarz i tuszował niedoskonałości. Wykonujemy makijaż brwi metodą cieniowania / ombre oraz ust kontur z wypełnieniem. Pracujemy na renomowanych barwnikach Diva Color.'
    },
    {
        id: 'pielegnacja-oprawy-oka',
        photo: '../images/forest-137.JPG',
        title: 'Kosmetyka twarzy',
        description: 'Marzysz o pięknym spojrzeniu? W naszym salonie stawiamy na naturalność w stylizacji oprawy oka. Wykonujemy hennę proszkową oraz żelową - pracujemy na najpopularniejszych i niezawodnych produktach do koloryzacji brwi i rzęs RefectoCil co zawsze daję gwarancję wysokiej jakości usługi. Oferujemy również lifting i laminację rzęs oraz brwi Noble Lashes. Regulację delikatnej oprawy oka wykonujemy opcjonalnie pęsetą bądź niezawodnym woskiem do depilacji miejsc wrażliwych firmy Lycon.'
    },
];

    const TreatmentDescription = ()=> {
        let { treatmentID } = useParams();
        const treatment = Treatments.find(t => t.id === treatmentID);
     return (
        <div>
            <div className="container-about-treatment">
                <img src={treatment.photo} className="about-image" alt="treatmentphoto"/>
                <div className="container-title-treatment">
                    <h2 className="about-title">{treatment.title}</h2>
                    <p className="about-description">{treatment.description}</p>
                </div>
            </div>
        </div>
    )};

export default TreatmentDescription;
