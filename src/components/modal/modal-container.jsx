import ModalContext from '../../contexts/modalcontext'
import React, { Component } from 'react'
import Modal from './modal'

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

