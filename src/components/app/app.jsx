import './style.scss'
import NavbarContainer from '../navbar/NavbarContainer'
import Home from '../home/home'
import ModalContainer from '../modal/modal-container'
import React, { Component } from 'react'
import ModalContext from '../../contexts/modalcontext'
import ContactModalContainer from '../contactmodal/ContactModalContainer'

export default class App extends Component {
    constructor(props){
        super(props)
        this.openModal = (modalContent) => {
            this.setState({
                modalIsOpen : true,
                content : modalContent
            })
        }
        this.closeModal = () => {
            this.setState({
                modalIsOpen : false,
                content : <div></div>
            })
        }
        this.state = {modalIsOpen : false,
                      content: <div></div>,
                      openModal : this.openModal,
                      closeModal : this.closeModal}
    }
    render() {
        return (
            <div>
                <ModalContext.Provider value={this.state}>
                    <NavbarContainer />
                    <ModalContainer />
                    <Home />
                </ModalContext.Provider>
            </div>
        )
    }
}