import React from "react";

const MainPicture = ({mainPicture}) => {
    return (
        <div>
            <section className="main-body">
                <img src={mainPicture} alt="ZdjęcieGł" className="main-picture"/>
            </section>
        </div>
)}

export default MainPicture;