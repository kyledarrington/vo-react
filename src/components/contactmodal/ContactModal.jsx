import React from "react";
import "./style.scss";

export default function ContactModal(props) {
    const form = (
        <div className="contact-form-container">
            <div className="contact-modal-header">
                <h2 className="title-text">Contact Me</h2>
            </div>
            <form className="contact-form" onSubmit={props.onSubmit}>
                <div className="contact-form-group">
                    <label className="primary-text">Name</label>
                    <input
                        name="name"
                        className="contact-form-input"
                        type="text"
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label className="primary-text">Email</label>
                    <input
                        name="email"
                        className="contact-form-input"
                        type="email"
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label className="primary-text">Subject</label>
                    <input
                        name="subject"
                        className="contact-form-input"
                        type="text"
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label className="primary-text">Message</label>
                    <textarea
                        name="body"
                        className="contact-form-textbox"
                        rows="6"
                        placeholder="What can I do for you?"
                        required
                    ></textarea>
                </div>
                <div className="button-wrapper w-100 px-auto">
                    <button className="contact-modal-submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
    const success = (
        <div className="contact-success-container">
            <div className="contact-modal-header">
                <h2 className="success-text">Thanks for Reaching Out!</h2>
            </div>
            <p>
                Your message has been sent successfully! Kyle will be in touch
                within the next 24 hours.
            </p>
            <p>You can now close this window.</p>
        </div>
    );
    return (
        <div className="contact-modal-container">
            {props.success ? success : form}
        </div>
    );
}
