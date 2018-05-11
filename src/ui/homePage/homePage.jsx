import React from 'react'
import User from '../../classes/User'
import { MoonLoader } from 'react-spinners'
import {
    Form,
    Input,
    Button,
    Table,
} from './../../components/components'
import {
    UserHome,
    ReferentHome,
} from '../uiComponents'
import { sendRequest, getRequests } from '../../services/requestsService'
import { goToSignInPage } from './../../routes'

import './homePage.css'


class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            loading: true
        }
    }

    async componentDidMount() {
        const username = this.props.match.params.username
        const user = await User.getUser({ username })
        this.setState({ user, loading: false })
    }

    handleLogout() {
        goToSignInPage()
    }

    render() {
        const {
            user,
            loading
        } = this.state

        if (loading) {
            return (
                <div className="layout">
                    <div className="spinner">
                        <MoonLoader size={70} />
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div className="header">
                    <Button
                        onClick={this.handleLogout}
                        label="Logout"
                        className="logout"
                        disabled={false} />
                </div> 
                <div className="layout">
                    {user.permissions.sendRequest && <UserHome user={user}/>}
                    {user.permissions.getRequests && <ReferentHome user={user}/>} 
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage
