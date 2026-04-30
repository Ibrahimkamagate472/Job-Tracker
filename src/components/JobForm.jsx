import { useState } from "react"
import {Input, Button} from "@chakra-ui/react"

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
                <Input type="text" placeholder="Company name" value={company} 
                onChange={(e) => setCompany(e.target.value)} required width="300px"/>
                <br/>
                Position:
                <Input type="text" placeholder="position" value={position} 
                onChange={(e) => setPosition(e.target.value)} required width="300px"/>
                <br/>
                Date applied:
                <Input type="text" placeholder="Date" value={dateApplied} 
                onChange={(e) => setDateApplied(e.target.value)} width="300px"/>
                <br/>
                Status:
            </label>
            <br/>
            <Button type="submit">Add</Button>
        </form>
    </div>
  )
}
export default JobForm