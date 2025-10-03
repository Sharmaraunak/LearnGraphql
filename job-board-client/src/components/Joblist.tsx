import { Link } from "react-router-dom"
import type { Job } from "../lib/interface"
import { formatDate } from "../lib/formatter"

const Joblist = ({jobs}: {jobs: Job[]}) => {
    return <ul className="box">
        {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
        ))}
    </ul>
}

const JobItem = ({job}: {job: Job}) => {
    const {id, title, companies, date} = job

    return <li className="media">
        <div className="media-left has-text-grey">
            {formatDate(new Date(date))}
        </div>
        <Link to={`/jobs/${id}`}>
            <h1 className="media-content">{title} at {companies.name}</h1>

        </Link>
    </li>
}

export default Joblist

