import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
export default function Modal({children, handleClose }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className='modal'>
           {children}
           <button onClick={handleClose}>close</button>
        </div>
    </div>
  ), document.body)
}


// children props 
  // whatever you nest inside the modal is the children it makes the modal completely reusable 
