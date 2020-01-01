import ModalContext from '../../contexts/modalcontext.js'
import React, { Component } from 'react'
import Modal from './modal.jsx'

export default class ModalContainer extends Component {
    
    render() {
        return (
            <ModalContext.Consumer>
                {({modalIsOpen, content}) => (
                    <Modal 
                      isOpen={modalIsOpen}
                      content={content}
                    />
                )}
            </ModalContext.Consumer>
        )
    }
}

