import React from 'react'
import './select.css'

export default function Select(props) {
    const {
        value,
        onChange,
        options,
    } = props

    function buildOptions(options) {
        return options.map(option => (
            <option value={option}>{option}</option>
        ))
    }

    return (
        <select
            value={value}
            onChange={onChange}>
            {buildOptions(options)}
        </select>
    )
} 