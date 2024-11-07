import React from 'react'
import './ModalB.css'

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

const ModalB: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  )
}

export default ModalB;
