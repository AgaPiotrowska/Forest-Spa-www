import React from "react";

const AboutUs = ({aboutPicture, aboutTitle, aboutDescription}) => {
    return (
            <div className="container-about-us">
                <img src={aboutPicture} className="about-image"/>
                <div className="container-title">
                    <h2 className="about-title">{aboutTitle}</h2>
                    <p className="about-description">{aboutDescription}</p>
                </div>
            </div>
    )};

export default AboutUs;