import React from 'react'
import {
    Button,
    Form,
    Input,
    Select,
    InlineMessage,
} from '../../components/components'
import { goToSignInPage } from '../../routes'
import { createUser } from '../../classes/userFactory'


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
        this.setState({ username, errors: []  })
    }

    onPasswordChange(e) {
        const password = e.target.value
        this.setState({ password })
    }

    onConfirmedPasswordChange(e) {
        const { password } = this.state
        const confirmedPassword = e.target.value
        if (!this.isConfirmed(password, confirmedPassword)) {
            return this.setState({ confirmedPassword, errors: ['Confirmed password Is wrong'] })
        }
        this.setState({ confirmedPassword, errors: [] })
    }

    isNotEmpty(...props) {
        return props.every(prop => !!props)
    }

    isConfirmed(password, confirmedPassword) {
        return password === confirmedPassword
    }

    validate(props) {
        const {
            username,
            password,
            confirmedPassword,
            role,
        } = props

        const isNotEmpty = username && password && confirmedPassword && role
        const isConfirmed = password === confirmedPassword
        return isNotEmpty && isConfirmed
    }

    async handleCreateNewAccount() {
        this.setState({ errors: [] })
        const user = createUser(this.state)
        user.saveUser()
            .then(goToSignInPage)
            .catch((err) => {
                this.setState(() => ({
                    errors: [err],
                    username: '',
                    password: '',
                    confirmedPassword: '',
                }))
            })
    }

    renderErrors(errors) {
        return errors.map(error => (
            <InlineMessage>
                {error}
            </InlineMessage>
        ))
    }

    render() {
        const {
            validate,
            renderErrors,
            state: {
                username,
                password,
                confirmedPassword,
                role,
                errors,
            },
        } = this
        const createAccountDisable = !validate({ username, password, confirmedPassword, role })
        return (
            <div className="grid">
                <Form>
                    {renderErrors(errors)}
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
                        label="Confirmed password"
                        className='form__input'
                        type="password" />
                    <Select 
                        onChange={this.onRoleChange}
                        value={role}
                        options={ROLES} />
                    <Button
                        onClick={this.handleCreateNewAccount}
                        label="Create new Account"
                        className="createAccount"
                        disabled={createAccountDisable} />
                </Form>
            </div>
        )
    }
}

export default SignUpPage
