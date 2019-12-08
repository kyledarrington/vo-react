import React, { Component } from "react";
import Navbar from "./Navbar";
import navbarItems from "./navItems";

export default class NavbarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { width: 0, showBurgerMenu: false, items: []}
        this.checkViewport = this.checkViewport.bind(this)
        this.handleBurgerToggle = this.handleBurgerToggle.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    componentDidMount() {
        this.checkViewport()
        window.addEventListener("resize", this.checkViewport)
        window.addEventListener("orientationchange", this.checkViewport)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkViewport)
    }

    checkViewport(event) {
        const newWidth =
            event != null ? event.target.outerWidth : window.outerWidth
        this.setState({ width: newWidth })
    }

    handleBurgerToggle() {
        this.setState({ showBurgerMenu: !this.state.showBurgerMenu })
    }

    handleLinkClick(index) {
        //Run onClick function if supplied.
        
        var item = navbarItems[index]
        if (item && item.onClick){item.onClick()}
        //Close BurgerMenu
        if (this.state.showBurgerMenu) {
            this.setState({ showBurgerMenu: false })
        }
    }

    render() {
        return (
            <Navbar
                width={this.state.width}
                showBurgerMenu={this.state.showBurgerMenu}
                onBurgerClick={this.handleBurgerToggle}
                onLinkClick={this.handleLinkClick}
                itemElements={this.state.items}
            />
        );
    }
}
