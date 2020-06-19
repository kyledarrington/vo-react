import React from 'react'
import './style.scss'

export default function ContactInfo() {
    return (
        <div>
            <div class="social-container">
                <a href="mailto:kyle@kyledarrington.com">
                    <img
                        src="/assets/icons/iconmonstr-email-3-240.png"
                        className="social-icon"
                    />
                    <h3>kyle@kyledarrington.com</h3>
                </a>
            </div>
            <div class="social-container">
                <a href="https://twitter.com/kylearringtonvo">
                    <img
                        src="/assets/icons/Twitter_Logo_WhiteOnBlue.png"
                        className="social-icon"
                    />
                    <h3>@kylearringtonvo</h3>
                </a>
            </div>
            <div class="social-container">
                <a href="https://www.facebook.com/kyledarrington/">
                    <img src="/assets/icons/f_logo_RGB-Blue_250.png" className="social-icon" />
                    <h3>facebook.com/kyledarrington</h3>
                </a>
            </div>
        </div>
    )
}
