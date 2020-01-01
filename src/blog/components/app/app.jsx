import React from 'react'
import NavbarContainer from '../../../components/navbar/NavbarContainer.jsx'
import ModalContext from '../../../contexts/modalcontext.js'
import ModalContainer from '../../../components/modal/modal-container.jsx'
import {Route, Switch} from 'react-router-dom'
import './style.scss'
import FeedContainer from '../feed/feed-container.jsx'
import ArticleContainer from '../article/article-conatiner.jsx'

export default class App extends React.Component {
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
                        <div className="navbar-spacer"></div>
                        <ModalContainer />
                        <Switch>
                            <Route path="/post/:slug" component={ArticleContainer} />
                            <Route exact path="/" component={FeedContainer} />
                        </Switch>
                    </ModalContext.Provider>
                </div>
        )
    }
}
