export function getPermissions(role) {
    switch (role) {
        case 'Client':
            return {
                sendRequest: 'sendRequest'
            }
        case 'Bank Employee': 
            return {
                getRequest: 'getRequest',
                sendResponce: 'sendResponce',
            }
    }
}