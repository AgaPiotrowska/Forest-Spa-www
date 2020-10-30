import React from "react";

import Header from "./Header";
import AboutUs from "./AboutUs";

const TeamAll = ({header, aboutPicture, aboutTitle, aboutDescription}) => {
    return (
        <div>
            <Header header="Nasz zespół"/>
            <div className="about-container">
                <AboutUs className="about-us" aboutPicture="images/forest spa-45.jpg" aboutTitle="Anna Zagórska" aboutDescription="Współzałożycielka Forest SPA. Kosmetolog, manicurzystka. Posiada również podstawową wiedzę w zakresie podologii. Wykonuje zabiegi na twarz, depilację, hennę. Specjalizuje się w zabiegach z wykorzystaniem kwasu hialuronowego (wypełniacze). Perfekcjonistka w każdym calu, z wielkim wyczuciem estetyki. Zawsze przemiła i uśmiechnięta. Lubi sportowy styl życia."/>
                <AboutUs aboutPicture="images/forest spa-94.jpg" aboutTitle="Karolina Drzewiecka" aboutDescription="Współzałożycielka Forest SPA, kosmetolog, masażystka. Wykonuje zabiegi na twarz (w tym mezoterapię), zabiegi na ciało, jak również masaże - w tym genialny masaż autorski liftingujący twarzy. Zajmuje się również mezoterapią, depilacją, henną. Prywatnie mama dwóch małych smyków. Energetyczny Anioł. Uwielbia holistyczne podejście do człowieka."/>
                <AboutUs aboutPicture="images/forest spa-46.jpg" aboutTitle="Weronika Dziewit" aboutDescription="Kosmetyczka z wieloletnim doświadczeniem. Manicurzystka, pedicurzystka. Wykonuje zabiegi na twarz, depilacje, hennę. Specjalizuje się w makijażu permanentnym oraz stylizacji okolicy oka - rzęsy 1:1, lifting i laminacja rzęs. Prywatnie Psia „mama”. Kocha wszystkie zwierzęta i matkę ziemię. Lubi tatuaże, piercing, deskorolkę."/>
                <AboutUs aboutPicture="images/for rest-5.jpg" aboutTitle="Aleksandra Jabłońska" aboutDescription="Kosmetyczka, masażystka, manicurzystka i pedicurzystka. Wykonuje zabiegi na ciało i twarz (w tym również mezoterapię), depilacje, hennę. Specjalizuje się w bańce chińskiej (masaż antycelulitowy) oraz nieco przyjemniejszym masażu gorącymi kamieniami. Szalona, pełna optymizmu i pozytywnej energii. Kocha włoskie klimaty. Jest świetną tancerką i aktorką."/>
                <AboutUs aboutPicture="images/for rest-4.jpg" aboutTitle="Elżbieta Marciniak" aboutDescription="Kosmetyczka z ponad 20 letnim doświadczeniem. Wykonuje zabiegi na twarz, manicure, pedicure, depilację, hennę. Specjalizuje się w zabiegach z głębokim wykorzystaniem rollerów - na twarz i ciało. Cudowna, pełna empatii. Z wielkim bagażem doświadczeń zarówno zawodowym jak i prywatnym. Jest wizytówką swoich umiejętności w doborze pielęgnacji - każdy w jej wieku chciałby wyglądać i czuć się tak jak ona !"/>
                </div>
        </div>
    )};

export default TeamAll;