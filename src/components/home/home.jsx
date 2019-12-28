import React from "react";
import './style.scss';
import VoiceZam from "../voicezam/VoiceZam";
import Sizzle from "../sizzle/Sizzle";
import BlogFeedContainer from "../blogfeed/BlogFeedContainer";
import ServiceBar from "../servicebar/ServiceBar";

export default function home() {
    return (
        <div className="home">
            <section id="top">
            <div className="hero">
                <div id="hero-content">
                    <div id="hero-portrait">
                        <img
                            src="/assets/images/portrait.jpg"
                        />
                    </div>
                    <div id="hero-text">
                        <h1>Kyle D. Arrington</h1>
                        <h2>Voice Over Artist</h2>
                        <h3>Sharp Wit, Bold Presence, Radiant Joy</h3>
                    </div>
                </div>
            </div>
            </section>
            <div className="container">
                <div className="home-sizzle"><Sizzle /></div>            
                <div className="home-demo"><VoiceZam /></div>
                <div className="home-service-bar"><section id="services"></section><ServiceBar /></div>
                <div className="home-blog-feed"><BlogFeedContainer /></div>
                <div className="home-about">
                    <section id="about"></section>
                    <h2 className="about-header">About Kyle</h2>
                    <p>
                        From the moment I had access to a microphone and a desktop,  I've found any excuse I can to send my voice out into the world. After completing my BA in Theater, I returned to my tech nerd roots and took on the role of a CRM/Web Developer for a prominent visual effects company in Boston. However, I find nothing more fulfilling than connecting to an audience through performance, and  acting has always remained a central part of my life.
                    </p>
                    <p>
                        Once I've gone off mic for the day, I love to dive into the worlds of video games and animation, and study their detailed histories.
                        I'm constantly trying new hobbies and learning new skills. Most recently, I've been dabbling in pixel art, a unique artform with a surprising level of depth. I also
                        enjoy making a fool of myself on dancefloors, and take pride in my ability to get others dancing right alongside me.
                    </p>
                </div>
            </div>
        </div>
    );
}
