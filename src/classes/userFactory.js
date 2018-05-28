import BankEmployee from './BankEmployee'
import Clerk from './Clerk'
import Referent from './Referent'

export const createUser = ({ username, password, role }) => {
    switch (role) {
        case 'Clerk':
            return new Clerk({ username, password })
        case 'Bank Employee':
            return new BankEmployee({ username, password })
        case 'Referent':
            return new Referent({ username, password })
    }
}