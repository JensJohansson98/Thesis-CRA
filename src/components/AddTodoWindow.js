import React from "react";
import reactDom from "react-dom";

const AddTodoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000

}

const Overlay ={
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function AddTodoWindow({ open,children, onClose }) {
  if (!open) return null
  return reactDom.createPortal(
    <>
      <div style={Overlay}>
        <div style={AddTodoStyle}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.getElementById('newTodo')
  )
}
