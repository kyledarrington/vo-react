import React from 'react'
import './style.scss'

export default function BlogFeed(props) {
    let isLoaded = props.posts.length > 0
    let postElements = []
    for (let i = 0; i < props.posts.length; i++) {
        const post = props.posts[i];
        const date = new Date(post.postDate).toLocaleDateString()
        postElements.push(
            <li key={i} className="blog-post"><a href={'https://blog.kyledarrington.com/post/' + post.slug}>{date}: {post.title}</a><hr /></li>
        )
    }
    return (
        <div className="blog-feed branded-box">
            <ul className="blog-posts-list">
                {!isLoaded && <p>Loading Posts. . .</p>}
                {props.error && <p>ERROR!</p>}
                {postElements}
            </ul>
        </div>
    )
}