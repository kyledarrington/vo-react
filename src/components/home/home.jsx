import React from "react";
import './style.scss';
import Demo from '../demo/demo'
import Sizzle from "../sizzle/Sizzle";
import ContactInfo from "../contactinfo/contactinfo"
import BlogFeedContainer from "../blogfeed/BlogFeedContainer";
import ServiceBar from "../servicebar/ServiceBar";

export default function home() {
    return (
        <div className="home">
            <section id="top">
                <div className="hero">
                    <div id="hero-content">
                        <div id="hero-text">
                            <h1>Kyle D. Arrington</h1>
                            <h2>Voice Over Artist</h2>
                        </div>
                    </div>

                </div>
            </section>

            <div className="container">
                <div className="home-portrait"><img src="/assets/images/portrait.jpg"/></div>
                <div className="home-contact-info"><ContactInfo /></div>
                <div className="home-demo"><h2 class="demo-header">Commercial Demo</h2><Demo title="Commercial" /></div>
            </div>
        </div>
    );
}
