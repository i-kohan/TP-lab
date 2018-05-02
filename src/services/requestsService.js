import db from './dbconfig'


export const sendRequest = async ({ username, requestData }) => {
    const requests = db.ref(`requests/${username}`)
    await requests.set({ requestData })
}

export const getRequests = async () => {
    const requests = db.ref(`requests`)
    return requests.once('value')
}
