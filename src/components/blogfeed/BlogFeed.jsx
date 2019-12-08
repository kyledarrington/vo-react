import React from 'react'
import './style.scss'

export default function BlogFeed(props) {
    let postElements = []
    var i = 0;
    for (var post of props.posts){
        postElements.push(
            <li key={i}className="blog-post"><a href={post.url}>{post.date}: {post.title}</a><hr /></li>
        )
        i++
    }
    return (
        <div className="blog-feed">
            <ul className="blog-posts-list">
                {!props.loaded && <p>Loading Posts. . .</p>}
                {postElements}
            </ul>
        </div>
    )
}