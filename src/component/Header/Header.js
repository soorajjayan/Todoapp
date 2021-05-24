import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

        </header>
    );
};
export default Header;