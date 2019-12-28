import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default function PreviewCard(props) {
    let postDate = new Date(props.date).toLocaleDateString()
    return (
        <div class="preview-card">
            <Link to={props.url}><h2 class="preview-title">{props.title}</h2></Link>
            <p><em>Posted {postDate}</em></p>
            <a href={props.url}><div class="preview-image-container"></div></a>
            <p>{props.description}</p>
        </div>
    )
}
