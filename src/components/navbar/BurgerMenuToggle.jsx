import React from 'react'



const BurgerMenuToggle = props => (
    <div id="burger-toggle-container">
        <div id="burger-toggle">
            <a id="burger-menu-icon" onClick={props.handleClick}>&#x2630;</a>
        </div>
    </div>
)

export default BurgerMenuToggle