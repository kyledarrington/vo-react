import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app.jsx'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-138493704-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'))