import React from 'react'

import './cardPopup.css'

export default function CardPopup({ children, onClick }) {
    return (
        <div className="popup">
            <div className="popup--content">
                {children}
            </div>
        </div>
    )
}