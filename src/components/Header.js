import React from "react";

const Header = ({header}) => {
    return (
        <div>
            <section className="header-title">
                <h1>{header}</h1>
            </section>
        </div>
)};

export default Header;