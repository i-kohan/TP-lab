import React from 'react'
import './input.css'
import { read } from 'fs';

export default function(props) {
    const {
        placeholder,
        onChange,
        className,
        value,
        required,
        type,
        label,
    } = props

    return (
        <React.Fragment>
            <label>
                <span className='hidden'>{label}</span> 
            </label>
            <input
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                value={value}
                required={required}
                type={type} />
        </React.Fragment>
    )
} 