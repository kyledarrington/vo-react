import React, {useState} from 'react'
import BlogFeed from './BlogFeed'
const rssParser = require('../../../node_modules/rss-parser/dist/rss-parser.js')

export default class BlogFeedContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {posts : []}
    }
    async componentDidMount(){
        let parser = new rssParser
        let blogPosts = []
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        const feed = await parser.parseURL(CORS_PROXY + 'https://blog.kyledarrington.com/feed')
        for (var entry of feed.items) {
            if (blogPosts.length >= 6) break;
            blogPosts.push({
                date : new Date(entry.pubDate).toLocaleDateString(),
                url : entry.link,
                title : entry.title
            })
        }
        this.setState({posts: blogPosts, loaded: true})
    }
    render() {
        return (
            <BlogFeed posts={this.state.posts} loaded={this.state.loaded} />
        )
    }
}



/* export default async function BlogFeedContainer() {
    let parser = new rssParser
    let blogPosts = []
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    const feed = await parser.parseURL(CORS_PROXY + 'https://blog.kyledarrington.com/feed')
    for (var entry of feed.items) {
        if (blogPosts.length >= 5) break;
        blogPosts.push({
            date : new Date(entry.pubDate).toLocaleDateString(),
            url : entry.link,
            title : entry.title
        })
    }
    console.log(blogPosts)
    const [posts, setPosts] = useState(blogPosts);
    return (
        <BlogFeed posts={posts} />
    )
}
 */