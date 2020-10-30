import React from "react";

import MainPicture from "./MainPicture";
import MiddleSectionText from "./MiddleSectionText";

const MainBody = ({mainPicture}) => {
    return (
        <div>
            <MainPicture mainPicture="images/las-44.jpg"/>
            <MiddleSectionText/>
        </div>
)};

export default MainBody;