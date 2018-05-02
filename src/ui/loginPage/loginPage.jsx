import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Form, Input, InlineMessage } from '../../components/components'
import { goToSignUpPage, goToHomePage } from './../../routes'
import User from '../../classes/User'
import './loginPage.css'

class LoginPage extends React.Component {
    
    constructor(props) {
        super(props)

        this.db = props.db

        this.state = {
            username: '',
            password: '',
            errors: []
        }

        this.getLoggedInUser = this.getLoggedInUser.bind(this)
        this.onLoginChange = this.onLoginChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    async getLoggedInUser() {
        User.signInUser(this.state).then(user => {
            goToHomePage(user.username)
        })            
        .catch(err => this.setState({
            errors: [err],
            username: '',
            password: '',
        }))
    }

    onLoginChange(e) {
        const username = e.target.value
        this.setState({ username })
    }

    onPasswordChange(e) {
        const password = e.target.value
        this.setState({ password })
    }

    renderErrors(errors) {
        return errors.map(error => (
            <InlineMessage>
                {error}
            </InlineMessage>
        ))
    }

    render() {
        const { username, password, errors } = this.state
        return (
            <div className="grid">
                <Form>
                    {this.renderErrors(errors)}
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
