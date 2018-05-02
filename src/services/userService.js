import db from './dbconfig'

export const createNewAccount = async ({ username, password, role, permissions }) => {
    const user = db.ref(`/users/${username}`)
    const userData = await user.once('value')
    if (userData.exists()) {
        return Promise.reject('User already exists')
    }
    return user.set({ username, password, role, permissions })
}

export const signIn = async ({ username, password }) => {
    const user = await db.ref(`/users/${username}`).once('value')
    const userData = user.val()
    if (user.exists() && userData.password === password) {
        return Promise.resolve(userData);
    } else {
        return Promise.reject('There is no user with such Username/password')
    }
}

export const getUser = async ({ username }) => {
    const user = await db.ref(`/users/${username}`).once('value')
    return user.val()
}
