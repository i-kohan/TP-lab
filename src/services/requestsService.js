import db from './dbconfig'


export const sendRequest = async ({ username, requestData }) => {
    const requests = db.ref(`requests`)
    await requests.push({ username, ...requestData, status: 'Initiated' })
}

export const getRequests = async () => {
    const requests = db.ref(`requests`)
    return requests.once('value')
}
