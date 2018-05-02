import React from 'react'
import User from '../../classes/User'
import { MoonLoader } from 'react-spinners'
import {
    Form,
    Input,
    Button,
    Table,
} from './../../components/components'
import { sendRequest, getRequests } from '../../services/requestsService'
import { goToSignInPage } from './../../routes'

import './homePage.css'


class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            loading: true,
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


    async componentDidMount() {
        const username = this.props.match.params.username
        const user = await User.getUser({ username })
        this.setState({ user, loading: false })
        if (user.permissions.getRequest) {
            const requests = await getRequests()
            this.setState({ requests: requests.val() })
        }
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
        const {
            user,
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

    handleLogout() {
        goToSignInPage()
    }

    render() {
        const {
            user,
            loading,
            salary,
            creditAmount,
            date,
            requests,
         } = this.state

        if (loading) {
            return (
                <div className="center">
                    <div className="spinner">
                        <MoonLoader size={70} />
                    </div>
                </div>
            )
        }

        if (user.permissions.sendRequest) {
            return (
                <div className="center">
                    <div className="table"> 
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
                    </div>
                </div>
            )
        }
        if (user.permissions.getRequest) {
            const rows = Object.(requests)
            return (
                <div className="center">
                    <div className="table">
                        <Table
                            mainRow={['Username', 'Salary', 'Credit amount', 'Date']}
                            rows={requests.} />
                    </div>
                </div>
            )
        }
        return (
            <div className="center">
                <Button
                    onClick={this.handleLogout}
                    label="Logout"
                    className="logout"
                    disabled={false} />
            </div>
        )
    }
}

export default HomePage
