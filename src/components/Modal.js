import React from 'react'
import './Modal.css'
export default function Modal({children, handleClose }) {
  return (
    <div className="modal-backdrop">
        <div className='modal'>
           {children}
           <button onClick={handleClose}>close</button>
        </div>
    </div>
  )
}


// children props 
  // whatever you nest inside the modal is the children it makes the modal completely reusable 
