import User from './User'
import { getRequests } from '../services/requestsService'

class BankEmployee extends User {
    
    constructor(props) {
        super(props)
        this.role = 'Bank Employee'
        this.permissions = this.getPermissions(this.role)
    }

    async getRequest() {
        return getRequests()
    }
}

export default BankEmployee
