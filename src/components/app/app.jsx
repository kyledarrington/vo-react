import './style.scss'
import NavbarContainer from '../navbar/NavbarContainer'
import Home from '../home/home'
import ModalContainer from '../modal/modal-container'
import React, { Component } from 'react'
import ModalContext from '../../contexts/modalcontext'
import Helmet from 'react-helmet'

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
                <Helmet>
                    <title>Kyle D. Arrington - Voice Over Artist</title>
                </Helmet>
                <ModalContext.Provider value={this.state}>
                    <ModalContainer />
                    <Home />
                </ModalContext.Provider>
            </div>
        )
    }
}