import { connection } from './connection'

export const getUserTable = () => {
    return connection.table('user')
}

export const getUserByEmail = async (email) => {
    return getUserTable().first().where({email})
}

