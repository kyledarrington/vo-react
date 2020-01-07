import React, { Component } from 'react'
import Axios from 'axios'
import Article from './article'
export default class ArticleContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            article : {}, 
            hasError: false
        }
    }
    async componentDidMount(){
        let a = this.state.article,
            match = this.props.match,
            error = false
        try{
            const result = await Axios.get('/posts/' + match.params.slug)
            if(result.status == 200) {
                a = result.data
            }
            else error = true
        }
        catch(err){
            console.log(err)
            error = true
        }
        finally{
            this.setState({article: a, hasError : error})
        }
    }

    render() {
        return (
            <Article data={this.state.article} hasError={this.state.hasError} />
        )
    }
}
