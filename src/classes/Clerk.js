import User from './User'
import { sendRequest } from '../services/requestsService'

class Clerk extends User {
    
    constructor(props) {
        super(props)
        this.role = 'Client'
        this.permissions = this.getPermissions(this.role)
    }

    sendRequest() {
        return sendRequest(this)
    }
}

export default Clerk
