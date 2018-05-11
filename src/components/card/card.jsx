import React from 'react'
import { Button, CardPopup, IconButton } from '../components'

import './card.css'

class Card extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            showPopup: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    renderColumns(row, mainRow) {
        return Object.entries(mainRow)
            .map(([key, value]) => (
                <div className="card--column">
                    <div className="card--mainElement">
                        {value}
                    </div>
                    <div className="card--rowElement">
                        {row[key]}
                    </div>
                </div>
            ))
    }

    handleClick() {
        this.setState({ showPopup: true })
    }

    handleClose() {
        this.setState({ showPopup: false })
    }

    render() {
        const { showPopup } = this.state
        const {
            onClick,
            title,
            mainRow,
            row,
            buttonLabel,
            clickable,
            isInPopup,
        } = this.props
        
        const columns = this.renderColumns(row, mainRow)

        return (
            <div className={isInPopup ? "popup-card" : "card"}>
                <div className="card--title">
                    {title}
                </div>
                <div className="card--body">
                    {columns}
                </div>

                {clickable && 
                    <Button
                        label={buttonLabel}
                        onClick={this.handleClick}
                        className="card--button" />
                }

                {showPopup &&
                    <CardPopup>
                        <Card 
                            title="Main information"
                            mainRow={mainRow}
                            row={row}
                            clickable={false}
                            isInPopup={true} />
                        <IconButton
                            className="close-icon"
                            onClick={this.handleClose} />
                    </CardPopup>
                }
            </div>
        )
    }
}

export default Card

{/* <div className="card--info">
                </div> */}
