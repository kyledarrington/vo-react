import React from 'react'
import './style.scss'

export default function Sizzle() {
    function openContactModal(){}
    return (
        <div className="sizzle-container">
            <p className="sizzle">I am a young, spirited voice actor who deeply believes in the power of media to connect with people and tap into the human experience. You have a message, a story, an idea to share. I have the skills and training to ensure it is heard loud and clear. You have a deadline, and a budget. I have the knowledge and professionalism to keep the process efficient and painless. </p>
            <button type="button" className="contact-button" onClick={openContactModal}>
                <span className="">Let's Talk!</span>
            </button>
        </div>
    )
}
