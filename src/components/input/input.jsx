import React from 'react'

import './input.css'

export default function Input(props) {
    const {
        placeholder,
        onChange,
        className,
        value,
        required,
        type,
        label,
        setInputRef
    } = props

    return (
        <React.Fragment>
            <input
                ref={setInputRef}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                value={value}
                required={required}
                type={type} />
            <label>{label}</label>
        </React.Fragment>
    )
} 