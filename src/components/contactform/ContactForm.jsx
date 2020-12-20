import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Check2Circle } from "react-bootstrap-icons";

export default function ContactForm(props) {
    console.log(props);
    var submitMessage = props.submitting ? "Please Wait. . ." : "Send Message";
    console.log(props.onSubmit);
    var form = (
        <div>
            <h2 class="text-center">Let's Talk!</h2>
            <Form>
                <form onSubmit={props.onSubmit}>
                    <Form.Label>Name</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control name="firstName" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control name="lastName" placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="subject" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="body" as="textarea" rows={6} />
                    </Form.Group>
                    <Button
                        type="submit"
                        disabled={props.submitting}
                        message={submitMessage}
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    );
    var complete = (
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div>
                <h2 class="text-center">Success!</h2>
            </div>
            <div class="row" style={{height: "2rem"}}></div>
            <div>
                <Check2Circle size={124} color={"#57207e"} />
            </div>
            <div class="row" style={{height: "3rem"}}></div>
            <div>
                <p style={{fontSize: "1.5rem"}}>
                    Thank you for reaching out! I'll be in touch within 24
                    hours.
                </p>
            </div>
        </div>
    );

    return props.success ? complete : form;
}
