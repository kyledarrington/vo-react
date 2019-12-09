import React, {createContext} from 'react'

const ModalContext = createContext({
    modalIsOpen : false,
    content : (<div></div>),
    openModal: (content) => {console.log('ASS')},
    closeModal : () => {}
})

export default ModalContext