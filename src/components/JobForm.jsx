import { useState } from "react"

const JobForm = ({addJob}) => {
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [response, setResponse] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(company.trim() === "" || position.trim() === "" || dateApplied.trim() === ""){
            return
        }

        addJob(company, position, dateApplied)
        setCompany("")
        setPosition("")
        setDateApplied("")
        setResponse(false)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Company:
                <input type="text" placeholder="Company name" value={company} 
                onChange={(e) => setCompany(e.target.value)} required/>
                <br/>
                Position:
                <input type="text" placeholder="position" value={position} 
                onChange={(e) => setPosition(e.target.value)} required/>
                <br/>
                Date applied:
                <input type="text" placeholder="Date" value={dateApplied} 
                onChange={(e) => setDateApplied(e.target.value)}/>

            </label>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
export default JobForm