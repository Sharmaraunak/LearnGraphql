import { connection } from './connection'

export const getCompanyTable = () => {
    return connection.table('company')
}

export const getCompanyById = async (id) => {
    return getCompanyTable().first().where({id})
}