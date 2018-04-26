import React from 'react'
import {
    Button,
    Form,
    Input,
} from '../../components/components'

class SignUpPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
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
                        onClick={this.loginNewUser}
                        label='Sign Up'
                        className='signUp' />
                </Form>
            </div>
        )
    }
}