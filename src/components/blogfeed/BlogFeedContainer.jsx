import React, {useState} from 'react'
import BlogFeed from './BlogFeed'
import Axios from 'axios'
export default class BlogFeedContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {posts : [], error: false}
    }
    async componentDidMount(){
        var blogPosts = [],
            isError = false
        try{
            const result = await Axios.get('/posts')
            if(result.status == 200) blogPosts = result.data
            else isError = true
        }
        catch(err){
            isError = true
        }
        finally{
            this.setState({posts: blogPosts, error : isError})
        }
    }
    render() {
        return (
            <BlogFeed posts={this.state.posts} error={this.state.error} />
        )
    }
}
