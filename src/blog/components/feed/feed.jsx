import React from "react";
import PreviewCard from "../preview-card/preview-card";
import "./style.scss";
export default function Feed(props) {
    let cards = [];
    for (let i = 0; i < props.posts.length; i++) {
        const post = props.posts[i];
        cards.push(
            <PreviewCard
                key={i}
                title={post.title}
                description={post.snippet}
                url={"/post/" + post.slug}
                date={post.postDate}
                headerSrc={post.headerSrc}
            />
        );
    }
    return (
        <div class="feed">
            <div class="card-container">{cards}</div>
        </div>
    );
}
