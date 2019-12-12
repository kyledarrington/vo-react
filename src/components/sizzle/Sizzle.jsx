import React from "react";
import "./style.scss";
import ModalContext from "../../contexts/modalcontext";
import ContactModalContainer from "../contactmodal/ContactModalContainer";

export default function Sizzle() {
    return (
        <div className="sizzle-container">
            <p className="sizzle">
                I am a young, spirited voice actor who deeply believes in the
                power of media to connect with people and tap into the human
                experience. You have a message, a story, an idea to share. I
                have the skills and training to ensure it is heard loud and
                clear. You have a deadline, and a budget. I have the knowledge
                and professionalism to keep the process efficient and painless.{" "}
            </p>
            <ModalContext.Consumer>
                {({ openModal }) => (
                    <button
                        type="button"
                        className="contact-button"
                        onClick={() => openModal(<ContactModalContainer />)}
                    >
                        <span className="">Let's Talk!</span>
                    </button>
                )}
            </ModalContext.Consumer>
        </div>
    );
}
