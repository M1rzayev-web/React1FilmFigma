import React from "react";
import Nav from "./Header/Nav";
import Hero from "./Header/Hero";
import "./css/header.css"
function Header() {
    return (
        <div className="Header">
            <Nav />
            <Hero />
        </div>
    );
}

export default Header;