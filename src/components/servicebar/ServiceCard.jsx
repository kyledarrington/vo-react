import React from 'react'
import './style.scss'

export default function ServiceCard(props) {
    return (
        <div className="service-card">
            <img src={props.iconSrc} className="service-card-icon" />
            <h3 className="service-card-header">{props.title}</h3>
            <p className="service-card-text">{props.description}</p>
        </div>
    )
}
