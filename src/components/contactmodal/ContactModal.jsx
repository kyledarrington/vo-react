import React from 'react'
import './style.scss'

export default function ContactModal(props) {
    const form = (    
        <div class="contact-form-container">
            <form class="contact-form">
                <div class="contact-form-group"><label class="primary-text">Name</label><input name="name" class="contact-form-input" type="text" /></div>
                <div class="contact-form-group"><label class="primary-text">Email</label><input name="email" class="contact-form-input" type="text" /></div>
                <div class="contact-form-group"><label class="primary-text">Subject</label><input name='subject' class="contact-form-input" type="text" /></div>
                <div class="contact-form-group"><label class="primary-text">Message</label><textarea name='body' class="contact-form-textbox" rows="6" placeholder="What can I do for you?"></textarea></div>
            </form>
            <div class="button-wrapper w-100 px-auto">
                <button class="contact-modal-submit">Submit</button>
            </div>
        </div>
    )
    const success = (
        <div class="contact-success-container">
            <h1>Thanks for reaching out!</h1>
            <p>Your message has been sent successfully! Kyle will be in touch within the next 24 hours.</p>
            <p>You can now close this window.</p>
        </div>
    )
    return (
        <div class="contact-modal-container">
            <div class="contact-modal-header">
                <h2 class="">Contact Me</h2>
            </div>
            {props.success ? success : form}
        </div>
    )
}
