import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
} from './../../components/components'
import {
    ALL_FORMS
} from './../../constants'
import { sendRequest, getRequests } from '../../services/requestsService'

class UserHome extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            salary: 0,
            creditAmount: 0,
            requests: {},
            date: 0,
        }

        this.onChange = this.onChange.bind(this)
        this.handleCreditRequest = this.handleCreditRequest.bind(this)
    }

    onChange(type) {
        return (e) => {
            const value = e.target.value
            this.setState({ [type]: value })
        } 
    }

    handleCreditRequest() {
        const user = this.props.user
        const {
            creditAmount,
            salary,
            date,
        } = this.state
        sendRequest({
            username: user.username,
            requestData: {
                creditAmount,
                salary,
                date,
            }
        })

        this.setState({ creditAmount: 0, salary: 0, date: new Date().toLocaleDateString() })
    }

    render() {
        const { salary, creditAmount, date } = this.state

        const forms = Object.entries(ALL_FORMS)
            .map(([key, value]) => {
                const fields = Object.entries(value.fields)
                    .map(([key, value]) => (
                        <Input 
                            onChange={() => this.onChange(key)}
                            placeholder={value.placeholder}
                            required={true}
                            label={value.label}
                            className="form__input" // ???????
                            type={value.type} />
                    ))
                return (
                    <Form
                        key={value.title}
                        title={value.title}
                        className="user-form">
                        {fields}
                    </Form>
                    )
                }
            )

        return (
            <React.Fragment>
                {forms}
                {/* <Button
                    onClick={this.handleCreditRequest}
                    label="Request for credit"
                    className="createAccount"
                    disabled={false} /> */}
            </React.Fragment>
        )
    }
}

export default UserHome
