import { useParams } from "react-router-dom"
import { companies } from "../lib/fake-data"

const CompanyPage = () => {
    const {companyId} = useParams()
    const company = companies.find((company) => company.id === Number(companyId))
    
    return (
        <div className="container">
            <div className="section">
                <div className="box">
                    <h1 className="title is-2">{company?.name}</h1>
                    <p className="content is-medium">{company?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyPage
