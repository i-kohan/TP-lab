import React from 'react'
import './form.css'

export default function Form(props) {
    const {
        className,
        children,
        title
    } = props

    return (
        <form action=''>
            <div className={`form ${className}`}>
                <span className="form--title">{title}</span>
                {React.Children.map(children, (child) => (
                    <div className="form__field">
                        {child}
                    </div>
                ))}
            </div>
        </form>
    )
} 