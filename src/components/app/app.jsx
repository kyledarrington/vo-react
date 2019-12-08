import React from 'react'
import Navbar from '../navbar/Navbar'
import './style.scss'
import NavbarContainer from '../navbar/NavbarContainer'
import Home from '../home/home'

const App = () =>(
    <div>
        <NavbarContainer />
        <Home />
    </div>
)

export default App