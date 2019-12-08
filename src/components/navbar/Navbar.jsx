import React from "react";
import "./style.scss";
import navbarItems from "./navItems";
import BurgerMenu from "./BurgerMenu"
import SocialIcons from "../socialicons/SocialIcons";


const Navbar = props => {
    let itemElements = [];
    for (var i = 0; i < navbarItems.length; i++) {
        const item = navbarItems[i]
        itemElements.push(
            <li key={i} className="nav-item">
                <a
                    className="nav-link"
                    href={item.target}
                    onClick={() => props.onLinkClick(i)}
                >
                    {item.label.toUpperCase()}
                </a>
            </li>
        );
    }

    const navItems = (
        <div id="nav-item-container">
            <ul className="navbar-nav mr-auto">{itemElements}</ul>
        </div>
    )

    const burgerToggle = (
        <div id="burger-toggle-container">
            <div id="burger-toggle">
                <a onClick={props.onBurgerClick} id="burger-menu-icon">&#x2630;</a>
            </div>
        </div>
    )

    return(
        <div>
        <nav className="navbar" id="navbar">
            <div id="nav-content">
                <div id="nav-branding-container">
                    <div id="nav-logo">
                        <img src="images/logo_white.svg" />
                    </div>
                    <div id="nav-title">
                        <a className="nav-link" href="#top">
                            <span>KYLE D. ARRINGTON</span> 
                        </a>
                    </div>
                </div>
                {navItems}            
                <div id="navbar-social-container">
                    <SocialIcons />
                </div>
                {burgerToggle}
            </div>
        </nav>
        <BurgerMenu showMenu={props.showBurgerMenu} items={itemElements} />
        </div>
    )
};

export default Navbar;
