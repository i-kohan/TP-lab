import React from 'react'
import './iconButton.css'

export default function IconButton(props) {
    const {
        label,
        onClick,
        className,
        disabled,
    } = props

    function handleOnClick(e) {
        e.preventDefault()
        onClick()
    }

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={handleOnClick} >
            {label}
        </button>
    )
}
