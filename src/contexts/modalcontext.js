import React, {createContext} from 'react'

const ModalContext = createContext({
    modalIsOpen : false,
    content : (<div></div>),
    openModal: (content) => {},
    closeModal : () => {}
})

export default ModalContext