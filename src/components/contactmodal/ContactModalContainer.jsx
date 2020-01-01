import React, { Component } from "react";
import ContactModal from "./ContactModal.jsx";
import Axios from "axios";

export default class ContactModalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { success: false, submitting: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        this.submitContactForm(event.target).then(() => {});
    }
    async submitContactForm(target) {
        const data = new FormData(target);
        let payload = {};
        for (var [name, value] of data) {
            payload[name] = value;
        }
        try {
            let wasSuccessful = false;
            let result = await Axios.post(
                "/contact",
                payload
            );
            if (result.status == 200) {
                wasSuccessful = true;
            }
            this.setState({ success: wasSuccessful, submitting: false });
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <ContactModal
                onSubmit={this.handleSubmit}
                success={this.state.success}
                submitting={this.state.submitting}
            />
        );
    }
}
