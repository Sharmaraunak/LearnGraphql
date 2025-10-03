import { getJobs} from './db/jobs.js'
import { getCompanyById} from './db/companies.js'

export const resolvers = {
    Query :{
        jobs: () =>  getJobs()
    },
    Job: {
        date: (job) => toIsoDate(job.createdAt),
        company: (job) => getCompanyById(job.companyId)

    }
}

const toIsoDate = (date) => date.slice(0, 'yyyy-mm-dd'.length)



