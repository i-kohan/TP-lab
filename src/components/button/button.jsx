import React from 'react'
import './button.css'

export default function Button(props) {
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
            className={`${disabled ? `disabled ${className}` : className }`}
            onClick={handleOnClick} >
            {label}
        </button>
    )
}
