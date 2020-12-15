import React from "react";
import './style.scss';
import Demo from '../demo/demo'
import ContactInfo from "../contactinfo/contactinfo"
import BlogFeedContainer from "../blogfeed/BlogFeedContainer";
import Bio from '../bio/bio'
import Studio from '../studio/studio'

export default function home() {
    return (
        <div>
            <div className="container-fluid p-0">
                <section id="top">
                    <div className="hero">
                        <div id="hero-content">
                            <div class="row justify-content-center">
                                <div class="col-lg-auto col-12">
                                    <img src="/assets/images/logo.png" style={{height:"200px", width:"auto"}}></img>
                                </div>
                                <div class="col-lg-auto col-12" id="hero-text">
                                    <h1>Kyle D. Arrington</h1>
                                    <h2>Voice Over Artist</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <div className="container h-100 my-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">
                        <div class="container">
                            <div class="row"><div class="col"><h3 class="demo-header">Commercial Demo</h3><Demo title="Commercial" /></div></div>
                            <div class="row"><div class="col"><ContactInfo /></div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-12 p-0 d-flex flex-column justify-content-center">
                        <Studio />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="order-lg-1 order-2 col-lg-6 col-11 branded-box">
                        <h2>About Kyle</h2>
                        <hr />
                        <Bio />
                    </div>
                    <div className="order-lg-2 order-1 col-lg-4 offset-lg-2 col-12 home-portrait d-flex justify-content-center mb-lg-0 mb-5"><img src="/assets/images/portrait.jpg"/></div>
                </div>
            </div>
        </div>
    );
}
