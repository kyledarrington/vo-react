import React from 'react'
import {Mic, Speaker, Wifi} from 'react-bootstrap-icons'
import './style.scss'

export default function Studio() {
    return (
        <div class="container justify-content-center text-center branded-box py-3">
            <h2>Home Studio</h2>
            <div class="row w-100 mt-4">
                <div class="col-2 offset-1"> <Mic color="#ee1302" size={48} /> </div>
                <div class="col-auto"><h4 class="d-inline">CAD E-100S</h4></div>
            </div>
            <div class="row w-100 mt-4">
                <div class="col-2 offset-1"> <Speaker color="#ee1302" size={48} /></div>
                <div class="col-auto"> <h4 class="d-inline">Audient iD14</h4></div>
            </div>
            <div class="row w-100 mt-4">
                <div class="col-2 offset-1"> <Wifi color="#ee1302" size={48} /></div>
                <div class="col-auto"> <h4 class="d-inline">Source-Connect Enabled</h4></div>
            </div>
        </div>
    )
}
