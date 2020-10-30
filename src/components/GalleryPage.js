import React from "react";

import Header from "./Header";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

const GalleryPage = ({header}) => {
    return (
        <div>
            <Header header="Galeria"/>
            <Gallery photos={photos} direction={"column"}/>
        </div>
    )};

export default GalleryPage;