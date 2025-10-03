import { useState } from "react"

const CreateJobPage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleCreateJob = () => {
        console.log('Create job', title, description)
    }

    return (
        <div className="container">
            <div className="section">
                <div className="box">
                    <h1 className="title is-2">Create New Job</h1>
                    <form className="form">
                        <div className="field">
                            <label className="label">Job Title</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Enter job title"
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Job Description</label>
                            <div className="control">
                                <textarea 
                                    className="textarea" 
                                    placeholder="Enter job description"
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button 
                                    className="button is-primary is-large" 
                                    type="button" 
                                    onClick={handleCreateJob}
                                >
                                    Create Job
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateJobPage