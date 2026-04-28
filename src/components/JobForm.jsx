import { useState } from "react"

const JobForm = () => {
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [response, setResponse] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Company name:
                <input name="company" placeholder="company name" value = {company}/>
                Postion:
                <input name="positon" placeholder="postion name" value = {position}/>
                Date Applied
                <input name="dateApplied" placeholder="Date Applied" value = {dateApplied}/>
                Responded: 
                <input name="response" type="checkbox" value = {response}/>
            </label>

        </form>
    </div>
  )
}
export default JobForm