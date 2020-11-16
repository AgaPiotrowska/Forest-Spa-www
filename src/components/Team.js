import React from "react";

import Header from "./Header";
import MainPicture from "./MainPicture";

const Team = ({header, mainPicture}) => {
    return (
        <div>
            <Header header="Nasz zespół"/>
            <MainPicture mainPicture="images/forestspa-86.JPG"/>
        </div>
)};

export default Team;