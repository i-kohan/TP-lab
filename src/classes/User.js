import { createNewAccount, signIn, getUser } from '../services/userService'

class User {
    constructor({ username, password, role }) {
        this.username = username
        this.password = password
    }

    saveUser() {
        return createNewAccount(this)
    }

    static signInUser(props) {
        return signIn(props)
    }

    static getUser(props) {
        return getUser(props)
    }

    // TODO
    sendRequest() {
        return 0
    }

    getPermissions(role) {
        switch (role) {
            case 'Clerk':
                return {
                    sendRequest: 'sendRequest'
                }
            case 'Bank Employee': 
                return {
                    getReportedRequests: 'getReportedRequests',
                    sendResponce: 'sendResponce',
                }
            case 'Referent':
                return {
                    getRequests: 'getRequests',
                }
        }
    }
}

export default User
