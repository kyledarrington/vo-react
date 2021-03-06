import React from 'react'
import NavbarContainer from '../../../components/navbar/NavbarContainer'
import ModalContext from '../../../contexts/modalcontext'
import ModalContainer from '../../../components/modal/modal-container'
import {Router, Route, Switch} from 'react-router-dom'
import './style.scss'
import FeedContainer from '../feed/feed-container'
import ArticleContainer from '../article/article-conatiner'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import { Helmet } from 'react-helmet'

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

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
            <Router history={history}>
                <Helmet>
                    <title>Kyle D. Arrington Voice Over Blog</title>
                </Helmet>
                <div>
                    <ModalContext.Provider value={this.state}>
                        <NavbarContainer />
                        <ModalContainer />
                        <Switch>
                            <Route exact path="/" component={FeedContainer} />
                            <Route path="/post/:slug" component={ArticleContainer} />
                        </Switch>
                    </ModalContext.Provider>
                </div>
            </Router>
        )
    }
}
