import React from 'react'
import {
    Button,
    Form,
    Input,
    Select,
} from '../../components/components'
import { goToSignInPage } from '../../routes'
import { createNewAccount } from '../../services/services'

const ROLES = [
    'Client',
    'Bank Employee',
]

class SignUpPage extends React.Component {

    constructor(props) {
        super(props)

        this.db = props.db

        this.state = {
            username: '',
            password: '',
            confirmedPassword: '',
            role: 'Client',
            errors: [],
        }

        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onRoleChange = this.onRoleChange.bind(this)
        this.onConfirmedPasswordChange = this.onConfirmedPasswordChange.bind(this)
        this.handleCreateNewAccount = this.handleCreateNewAccount.bind(this)
    }

    onRoleChange(e) {
        const role = e.target.value
        this.setState({ role })
    }

    onLoginChange(e) {
        const username = e.target.value
        this.setState({ username })
    }

    onPasswordChange(e) {
        const password = e.target.value
        this.setState({ password })
    }
    
    onConfirmedPasswordChange(e) {
        const confirmedPassword = e.target.value
        this.setState({ confirmedPassword })
    }

    async handleCreateNewAccount() {
        const {
            username,
            password,
            confirmedPassword,
            role,
        } = this.state
        await createNewAccount(username, password, role).catch((err) => {
            this.setState({ errors: err })
        })
    }

    render() {
        const {
            username,
            password,
            confirmedPassword,
            role,
            errors,
        } = this.state
        return (
            <div className="grid">
                <Form>
                    <Input
                        onChange={this.onLoginChange}
                        placeholder='Enter your login'
                        value={username}
                        required={true}
                        label="Username"
                        className='form__input'
                        type='text' />
                    <Input
                        onChange={this.onPasswordChange}
                        placeholder='Enter your password'
                        value={password}
                        required={true}
                        label="Password"
                        className='form__input'
                        type="password" />
                    <Input
                        onChange={this.onConfirmedPasswordChange}
                        placeholder='Confirm your password'
                        value={confirmedPassword}
                        required={true}
                        label="Password"
                        className='form__input'
                        type="password" />
                    <Select 
                        onChange={this.onRoleChange}
                        value={role}
                        options={ROLES} />
                    <Button
                        onClick={this.handleCreateNewAccount}
                        label="Create new Account"
                        className="createAccount" />
                </Form>
            </div>
        )
    }
}

export default SignUpPage
