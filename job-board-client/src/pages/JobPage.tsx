import { useParams } from "react-router-dom"
import { jobs } from "../lib/fake-data"


const JobPage = () => {

    const {jobId} = useParams()
    const job = jobs.find((job) => job.id === Number(jobId))
    
    return (
        <div className="container">
            <div className="section">
                <div className="box">
                    <h1 className="title is-2">{job?.title}</h1>
                    <div className="content">
                        <p className="is-size-5 mb-4">{job?.description}</p>
                        <div className="tags has-addons">
                            <span className="tag is-dark">Company</span>
                            <span className="tag is-info">{job?.companies.name}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPage