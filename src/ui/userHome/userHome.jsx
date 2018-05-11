import React from 'react'
import {
    Form,
    Input,
    Button,
    Table,
} from './../../components/components'
import { sendRequest, getRequests } from '../../services/requestsService'

class UserHome extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            salary: 0,
            creditAmount: 0,
            requests: {},
            date: new Date().toLocaleDateString(),
        }

        this.onSalaryChange = this.onSalaryChange.bind(this)
        this.onCreditAmountChange = this.onCreditAmountChange.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.handleCreditRequest = this.handleCreditRequest.bind(this)
    }
    
    onSalaryChange(e) {
        const salary = e.target.value
        this.setState({ salary })
    }

    onCreditAmountChange(e) {
        const creditAmount = e.target.value
        this.setState({ creditAmount })
    }

    onDateChange(e) {
        const date = e.target.value
        this.setState({ date })
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

        return (
            <Form>
                <Input
                    onChange={this.onSalaryChange}
                    placeholder='Enter your salary'
                    value={salary}
                    required={true}
                    label="Salary per month"
                    className='form__input'
                    type='number' />
                <Input
                    onChange={this.onCreditAmountChange}
                    placeholder='Enter credit amount'
                    value={creditAmount}
                    required={true}
                    label="Credit amount"
                    className='form__input'
                    type="text" />
                <Input
                    onChange={this.onDateChange}
                    placeholder='Select date of apllying'
                    value={date}
                    required={true}
                    label="Date of apllying"
                    className='form__input'
                    type="date" />
                <Button
                    onClick={this.handleCreditRequest}
                    label="Request for credit"
                    className="createAccount"
                    disabled={false} />
            </Form>
        )
    }
}

export default UserHome
