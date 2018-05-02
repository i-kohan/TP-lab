import BankEmployee from './BankEmployee'
import Client from './Client'

export const createUser = ({ username, password, role }) => {
    switch (role) {
        case 'Client':
            return new Client({ username, password })
        case 'Bank Employee':
            return new BankEmployee({ username, password })
    }
}