import React from 'react'
import { MoonLoader } from 'react-spinners'
import {
    Form,
    Input,
    Button,
    Table,
    Card,
} from './../../components/components'
import { sendRequest, getRequests } from '../../services/requestsService'

import './referentHome.css'

const MAIN_ROW = {
    username: 'User name',
    salary: 'Salary',
    creditAmount: 'Credit amount',
    date: 'Expiration date',
}

class ReferentHome extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            loading: true,
            requests: {}
        }
    }

    async componentDidMount() {
        const user = this.props.user
        const requests = await getRequests()
        this.setState({ requests: requests.val(), loading: false })
    }

    buildRequests(requests) {
        return Object.entries(requests)
            .filter(([, value]) => value.status === 'Initiated')
            .map(([key, value]) => {
                return value
            })
    }

    render() {
        const { loading, requests } = this.state

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
        const cards = rows.map(row => (
            <Card
                title="Credit request"
                mainRow={MAIN_ROW}
                row={row}
                buttonLabel="Validate"
                clickable="true"
                onClick={() => console.log('hello')} />
        ))


        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }
}

export default ReferentHome
