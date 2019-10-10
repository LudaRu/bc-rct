import React from "react";
import { Link, Route, Switch }from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/card'>card</Link></li>
            </ul>
        </nav>
    </header>
)
export default Header;
