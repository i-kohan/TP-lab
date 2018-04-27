import React from 'react'

import './inlineMessage.css'

export default function InlineMessage(props) {
    const {
        children,
        isDisplayed = true,
    } = props

    if (!isDisplayed) {
        return null
    }

    return (
        <div className="inline-message">
            {children}
        </div>
    )
}