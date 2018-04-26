import React from 'react'

export default function(props) {
    const {
        value,
        onChange,
        options,
    } = props

    return (
        <select
            value={value}
            onChange={onChange}>
            {options}
        </select>
    )
} 