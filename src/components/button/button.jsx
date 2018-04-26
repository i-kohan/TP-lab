import React from 'react'
import './button.css'

export default function(props) {
    const {
        label,
        onClick,
        className
    } = props

    return (
        <button
            className={className}
            onClick={onClick} >
            {label}
        </button>
    )
}
