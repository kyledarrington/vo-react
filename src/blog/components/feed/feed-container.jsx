import React, { Component } from 'react'
import Axios from 'axios'
import Feed from './feed'

export default class FeedContainer extends Component {
    constructor(props){
        super(props)
        this.state = {posts : [], error: false}
    }
    async componentDidMount(){
        var blogPosts = [],
            isError = false
        try{
            const result = await Axios.get('/posts?max=6')
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
            <div>
                <Feed posts={this.state.posts} />
            </div>
        )
    }
}
