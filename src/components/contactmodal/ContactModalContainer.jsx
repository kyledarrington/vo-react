import React, { Component } from 'react'
import ContactModal from './ContactModal'

export default class ContactModalContainer extends Component {
    constructor(props){
        super(props)
        this.state = {success : false}
    }
    render() {
        return (
            <ContactModal />
        )
    }
}
