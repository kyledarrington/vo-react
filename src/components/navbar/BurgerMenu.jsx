import React from 'react'
import './style.scss'
import SocialIcons from '../socialicons/SocialIcons.jsx'

const BurgerMenu = props => {
    return (
        <div id="burger-menu" className={props.showMenu ? 'burger-slide-in' : 'burger-slide-out'}>
            <ul id="burger-menu-items">
                {props.items}
            </ul>
            <div id="burger-menu-social-container">
                <SocialIcons />
            </div>
        </div>
    )
}

export default BurgerMenu
