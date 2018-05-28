import React from 'react'
import { MoonLoader } from 'react-spinners'
import {
    Form,
    Input,
    Button,
    Table,
    Card,
    CardPopup,
    IconButton,
} from './../../components/components'
import { sendRequest, getRequests } from '../../services/requestsService'

import { ALL_FORMS, MAIN_INFO } from './../../constants';

const MAIN_ROW = {
    username: 'User name',
    salary: 'Salary',
    creditAmount: 'Credit amount',
    date: 'Expiration date',
}

class BankEmployeeHome extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            loading: true,
            selectedCard: null,
            requests: {},
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    async componentDidMount() {
        const user = this.props.user
        const requests = await getRequests()
        
        this.setState({
            requests: requests.val(),
            loading: false
        })
    }

    buildRequests(requests) {
        return Object.entries(requests)
            .filter(([requestId, value]) => value.status === 'Reported')
            .map(([key, value]) => {
                return { id: key, ...value }
            })
    }

    handleClose() {
        this.setState({ selectedCard: null })
    }

    handleClick(id) {
        this.setState({ selectedCard: id })
    }

    buildPopupCards(row) {
        return Object.entries(ALL_FORMS)
            .map(([key, { title, fields }]) => {
                const readOnlyFields = Object.entries(fields)
                    .reduce((acc, [key, { label }]) => {
                        acc[key] = label
                        return acc
                    }, {})
                return (
                    <Card 
                        key={key}
                        title={title}
                        allRows={readOnlyFields}
                        row={row[key]}
                        clickable={false}
                        isInPopup={true} />
                )
            })
    }

    render() {
        const { loading, requests, selectedCard } = this.state

        if (loading) {
            return (
                <div className="center">
                    <div className="spinner">
                        <MoonLoader size={70} />
                    </div>
                </div>
            )
        }

        const rows = this.buildRequests(requests)
        let cards

        if (selectedCard) {
            const selectedRow = rows.find(row => row.id === selectedCard)
            cards = this.buildPopupCards(selectedRow)

            return (
                <CardPopup>
                    {cards}
                    <IconButton
                        className="close-icon"
                        onClick={this.handleClose} />
                </CardPopup>
            )
        }

        cards = rows.map(row => {
            const readOnlyFields = Object.entries(MAIN_INFO.fields)
                .reduce((acc, [key, { label }]) => {
                    acc[key] = label
                    return acc
                }, {})
            return (<Card
                kye={row.id}
                title="Credit request"
                allRows={readOnlyFields}
                row={row.MAIN_INFO}
                rowId={row.id}
                buttonLabel="View full information"
                clickable="true"
                onClick={this.handleClick} />
            )
        })


        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }
}

export default BankEmployeeHome
