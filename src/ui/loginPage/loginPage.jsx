import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Form, Input } from '../../components/components'
import { goToSignUpPage } from './../../routes'
import { signIn } from './../../services/services'

import './loginPage.css'

class LoginPage extends React.Component {
    
    constructor(props) {
        super(props)

        this.db = props.db

        this.state = {
            username: '',
            password: '',
            role: '',
        }

        this.getLoggedInUser = this.getLoggedInUser.bind(this)
        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    async getLoggedInUser() {
        const { username, password } = this.state 
        return signIn(username, password).catch(err => console.log(err))
    }

    onLoginChange(e) {
        const username = e.target.value
        this.setState({ username })
    }

    onPasswordChange(e) {
        const password = e.target.value
        this.setState({ password })
    }

    render() {
        const { username, password } = this.state
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
                        <Button
                            onClick={this.getLoggedInUser}
                            label='Sign In'
                            className='signIn' />
                        <Button
                            onClick={goToSignUpPage}
                            label='Sign Up'
                            className='signUp' />
                </Form>
            </div>
        );
    }
}

export default LoginPage
