import React from 'react'
import ReactModal from 'react-modal'
import './style.scss'
import ModalContext from '../../contexts/modalcontext.js'

ReactModal.setAppElement('#root');

export default function Modal(props) {
    return (
        <ModalContext.Consumer>
            {({isOpen, content, closeModal}) => (
                <ReactModal
                    isOpen={props.isOpen}
                    onRequestClose={closeModal}
                >
                    {props.content}
                </ReactModal>
            )}
        </ModalContext.Consumer>
    )
}
