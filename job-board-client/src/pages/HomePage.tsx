import JobList from "../components/Joblist"
import { jobs } from "../lib/fake-data"

const HomePage = () => {
    return (
        <div className="container">
            <div className="section">
                <h1 className="title is-1 has-text-centered">Job Board</h1>
                <p className="subtitle is-4 has-text-centered">Find your next opportunity</p>
            </div>
            <JobList jobs={jobs} />
        </div>
    )
}

export default HomePage