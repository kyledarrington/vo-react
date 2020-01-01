import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import './style.scss'

export default function ServiceBar() {
    const cards = [
        {title:"Animation", description:"Hear your characters fully realized through energized and informed performances.", iconSrc: "/assets/images/Animation_white.svg"},
        {title:"Commercial", description:"Engage Millennial and Gen Z audiences with a voice they trust and relate to.", iconSrc:"/assets/images/commercial_white.svg"},
        {title:"Corporate", description:"Distinguish your brand by featuring narration from a bona fide tech guru.", iconSrc:"/assets/images/laptop_white.svg"},
        {title:"Video Games", description:"Immerse players in the world of your game by bringing the people in it to life.", iconSrc:"/assets/images/gamepad_white.svg"}
    ]
    let cardComponents = []
    for(var card of cards){
        cardComponents.push(<ServiceCard key={card.title} title={card.title} description={card.description} iconSrc={card.iconSrc} />)
    }
    return (
        <div className="service-bar">
            <h2 className="service-bar-header">Voice Over Services</h2>
            <div className="service-card-container">
                {cardComponents}
            </div>           
        </div>
    )
}