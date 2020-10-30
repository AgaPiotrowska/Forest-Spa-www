import React from "react";

import Header from "./Header";
import MainPicture from "./MainPicture";

const Team = ({header, mainPicture}) => {
    return (
        <div>
            <Header header="Nasz zespół"/>
            <MainPicture mainPicture="images/forest spa-86.jpg"/>
        </div>
)};

export default Team;