import React from 'react'
import './button.css'

export default function(props) {
    const {
        label,
        onClick,
        className,
        children,
    } = props

    function handleOnClick(e) {
        e.preventDefault()
        onClick()
    }

    return (
        <button
            className={className}
            onClick={handleOnClick} >
            {label}
            {children}
        </button>
    )
}
