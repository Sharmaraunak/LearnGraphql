import { connection } from './connection'
import { createId } from './ids'

export const getJobTable = () => {
    return connection.table('job')
}

export const getJobs = async () => {
    return getJobTable().select()
}

export const getJobById = async (id) => {
    return getJobTable().first().where({id})
}

export const createJob = async ({title, description, companyId}) => {
    const job = {
        id: createId(),
        title,
        description,
        companyId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    await getJobTable().insert(job)
    return job
}

export const updateJob = async (id, {title, description, companyId}) => {
    const job = await getJobById(id)
    if (!job) {
        throw new Error('Job not found')
    }
    
    const updateFields = {
        title,
        description,
        updatedAt: new Date().toISOString(),
    }
    await getJobTable().where({id}).update(updateFields)
    return {...job, ...updateFields}
}

export const deleteJob = async (id) => {
    const job = await getJobById(id)
    if (!job) {
        throw new Error('Job not found')
    }
    await getJobTable().where({id}).delete()
    return job
}