import React from 'react'
import './form.css'

export default function(props) {
    const {
        className,
        children,
    } = props

    return (
        <form action=''>
            <div className="form login">
                {React.Children.map(children, (child) => (
                    <div className="form__field">
                        {child}
                    </div>
                ))}
            </div>
        </form>
    )
} 