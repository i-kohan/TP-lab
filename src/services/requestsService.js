import db from './dbconfig'

export const sendRequest = async ({ username, ...restData }) => {
    const requests = db.ref(`requests`)
    await requests.push({ username, ...restData, status: 'Initiated' })
}

export const getRequests = async () => {
    const requests = db.ref(`requests`)
    return requests.once('value')
}
