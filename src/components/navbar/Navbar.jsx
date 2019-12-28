import React from "react";
import "./style.scss";
import BurgerMenu from "./BurgerMenu";
import SocialIcons from "../socialicons/SocialIcons";
import ModalContext from "../../contexts/modalcontext";
import ContactModalContainer from "../contactmodal/ContactModalContainer";

const Navbar = props => {
    let itemElements = [
        <li key="1" className="nav-item">
            <a className="nav-link" href="#about">
                ABOUT
            </a>
        </li>,
        <li key="2" className="nav-item">
            <a className="nav-link" href="#services">
                SERVICES
            </a>
        </li>,
        <li key="3" className="nav-item">
            <a className="nav-link" href="#">
                BLOG
            </a>
        </li>,
        <ModalContext.Consumer key="4">
            {({ openModal }) => (
                <li className="nav-item">
                    <a
                        className="nav-link" 
                        style={{cursor: 'pointer'}}
                        onClick={() => {openModal(<ContactModalContainer />);}}
                    >
                        CONTACT
                    </a>
                </li>
            )}
        </ModalContext.Consumer>
    ];

    const navItems = (
        <div id="nav-item-container">
            <ul className="navbar-nav mr-auto">{itemElements}</ul>
        </div>
    );

    const burgerToggle = (
        <div id="burger-toggle-container">
            <div id="burger-toggle">
                <a onClick={props.onBurgerClick} id="burger-menu-icon">
                    &#x2630;
                </a>
            </div>
        </div>
    );

    return (
        <div>
            <nav className="navbar" id="navbar">
                <div id="nav-content">
                    <div id="nav-branding-container">
                        <div id="nav-logo">
                            <img src="/assets/images/logo_white.svg" />
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
    );
};

export default Navbar;
