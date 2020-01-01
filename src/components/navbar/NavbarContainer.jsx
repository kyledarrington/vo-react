import React, { Component } from "react";
import Navbar from "./Navbar.jsx";

export default class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.handleBurgerToggle = this.handleBurgerToggle.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.state = {
            width: 0,
            showBurgerMenu: false,
            baseHost: "",
            protocol: ""
        };
    }

    componentDidMount() {
        const loc = window.location;
        const hostSplit = loc.host.split(".");
        const host =
            hostSplit[hostSplit.length - 1] == "com"
                ? hostSplit[hostSplit.length - 2] + ".com"
                : hostSplit[hostSplit.length - 1];
        this.setState({ baseHost: host, protocol: loc.protocol + "//" });
    }

    handleBurgerToggle() {
        this.setState({ showBurgerMenu: !this.state.showBurgerMenu });
    }

    handleLinkClick(index) {
        //Run onClick function if supplied.

        var item = navbarItems[index];
        if (item && item.onClick) {
            item.onClick();
        }
        //Close BurgerMenu
        if (this.state.showBurgerMenu) {
            this.setState({ showBurgerMenu: false });
        }
    }

    render() {
        return (
            <Navbar
                showBurgerMenu={this.state.showBurgerMenu}
                onBurgerClick={this.handleBurgerToggle}
                onLinkClick={this.handleLinkClick}
                baseHost={this.state.baseHost}
                protocol={this.state.protocol}
            />
        );
    }
}
