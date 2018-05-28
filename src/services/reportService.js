import db from './dbconfig'
import { getRequests } from './requestsService'

export const sendToReport = async (id, row) => {
    let status
    if (row.creditAmount > 100) {
        status = 'good'
    } else {
        status = 'bad'
    }
    db.ref(`requests/${id}/MAIN_INFO`).update({
        status
    })
    return db.ref(`requests/${id}`).update({
        status: 'Reported'
    })
}
