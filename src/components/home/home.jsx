import React from "react";
import './style.scss';
import Demo from '../demo/demo'
import ContactInfo from "../contactinfo/contactinfo"
import ContactFormContainer from '../contactform/ContactFormContainer'
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
                                <div class="col-lg-auto col-12 mt-auto">
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
            <div className="row text-center d-flex justify-content-center align-items-center" style={{height: '3rem', backgroundColor: '#57207e'}}>
                <h3 style={{color: '#fff'}}>Sharp Wit | Bold Presence | Radiant Joy</h3>
            </div>
            <div className="row" style={{height: '3rem'}}></div>
            <div className="container h-100 mb-lg-5">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div class="container">
                            <div class="row"><div class="col"><h2 class="demo-header">Commercial Demo</h2><Demo title="Commercial" /></div></div>
                            <div class="row"><div class="col"><ContactInfo /></div></div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2 col-12 p-0 pr-lg-4 d-flex flex-column justify-content-center">
                        <Studio />
                    </div>
                </div>
                <div className="row" style={{height: '6rem'}}></div>
                <div className="row justify-content-center">
                    <div className="col-10 p-4 branded-box">
                        <div class="row">
                            <div class="col"><h2>About Kyle</h2></div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3 d-flex justify-content-center align-items-center">
                                <img class="home-portrait" src="/assets/images/portrait.jpg"/>
                            </div>
                            <div class="col-9"><Bio /></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{height: '6.5rem'}}></div>
                <div className="row">
                    <div className="col-3">
                        <h3>Blog Posts</h3>
                        <BlogFeedContainer />
                    </div>
                    <div className="col-7 offset-2">
                        <ContactFormContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}
