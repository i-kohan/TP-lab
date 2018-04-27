import React from 'react'
import './input.css'
import { read } from 'fs';

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
            <label>
                <span className='hidden'>{label}</span> 
            </label>
            <input
                ref={setInputRef}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                value={value}
                required={required}
                type={type} />
        </React.Fragment>
    )
} 