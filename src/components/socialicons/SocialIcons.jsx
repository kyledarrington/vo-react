import React from 'react'
import './style.scss'

export default function SocialIcons() {
    return (
        <div>
            <a href="https://twitter.com/kylearringtonvo">
                <img
                    src="/icons/Twitter_Logo_WhiteOnImage.png"
                    className="social-icon"
                />
            </a>
            <a href="https://www.facebook.com/kyledarrington/">
                <img src="/icons/flogo-HexRBG-Wht-58.png" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/kylearringtonvo/">
                <img src="/icons/glyph-logo_May2016.png" className="social-icon" />
            </a>
        </div>
    )
}
