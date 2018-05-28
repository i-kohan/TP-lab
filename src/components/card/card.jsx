import React from 'react'
import { Button } from '../components'

import './card.css'

class Card extends React.Component {

    renderColumns(row, allRows) {
        return Object.entries(allRows)
            .map(([key, value]) => {
                if (key === 'status') {
                    return row[key] ? (
                        <div className="card--column">
                            <div className="card--mainElement">
                                {value}
                            </div>
                            <div className={`card--rowElement ${row[key]}`}>
                                {row[key]}
                            </div>
                        </div>
                    ) : null
                }
                return (
                    <div className="card--column">
                        <div className="card--mainElement">
                            {value}
                        </div>
                        <div className="card--rowElement">
                            {row[key]}
                        </div>
                    </div>
                )
            })
    }

    render() {
        const {
            rowId,
            onClick,
            title,
            allRows,
            row,
            buttonLabel,
            clickable,
            isInPopup,
        } = this.props
        
        const columns = this.renderColumns(row, allRows)

        return (
            <div className={isInPopup ? "popup-card" : "card"}>
                <div className="card--title">
                    {title}
                </div>
                <div className="card--body">
                    {columns}
                </div>

                {clickable && (
                    <React.Fragment>
                        {this.props.sendToReport && (
                            <Button 
                                label="Send to Report"
                                onClick={() => this.props.sendToReport(rowId, row)}
                                className="card--button" />
                        )}
                        <Button
                            label={buttonLabel}
                            onClick={() => this.props.onClick(rowId)}
                            className="card--button" />
                    </React.Fragment>
                    )
                }
            </div>
        )
    }
}

export default Card

{/* <div className="card--info">
                </div> */}
