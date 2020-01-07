import React from 'react'

import './style.scss'
import ReactMarkdown from 'react-markdown'
import {Helmet} from 'react-helmet'

export default function Article(props) {
    let postDate = new Date(props.data.postDate).toLocaleDateString()
    const content = (
        <div className="article">
            <div className="article-content">
                <h1 className="article-title">{props.data.title}</h1> 
                <p><em>Posted {postDate}</em></p>
                <img className="article-header-image" src={props.data.headerSrc} />
                <ReactMarkdown source={props.data.mdBody} escapeHtml={false} />
            </div>
        </div>
    )
    const loading = <div className="article-content"><span>Loading Article...</span></div>
    return (
        <div className="article-container">
            <Helmet>
                <title>{props.data.title}</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@kylearringtonvo" />
                <meta name="twitter:creator" content="@kylearringtonvo" />
                <meta name="twitter:title" content={props.data.title} />
                <meta name="twitter:description" content={props.data.snippet} />
                <meta name="twitter:image" content={props.data.headerSrc} />
            </Helmet>
            {props.data.title == null ? loading : content}
        </div>
    )
}