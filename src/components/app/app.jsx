import './style.scss'
import NavbarContainer from '../navbar/NavbarContainer.jsx'
import Home from '../home/home.jsx'
import ModalContainer from '../modal/modal-container.jsx'
import React, { Component } from 'react'
import ModalContext from '../../contexts/modalcontext.js'

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