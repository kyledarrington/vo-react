import React from 'react'
import BurgerMenuToggle from './BurgerMenuToggle'
import './style.scss'

class BurgerMenuContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        return <BurgerMenuToggle isOpen={this.state.isOpen} />
    }
}

export default BurgerMenuContainer