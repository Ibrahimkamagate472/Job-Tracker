import { useState } from "react"
import {Input, Button, Field} from "@chakra-ui/react"

const JobForm = ({addJob}) => {
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [response, setResponse] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(company.trim() === "" || position.trim() === ""){
            return
        }

        if(dateApplied.trim() === ""){
            setDateApplied("")
        }
        
        addJob(company, position, dateApplied, response)
        setCompany("")
        setPosition("")
        setDateApplied("")
        setResponse("In progess")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Field.Root>
                <Field.Label>Company</Field.Label>
                <Input type="text" placeholder="Company name" value={company} 
                onChange={(e) => setCompany(e.target.value)} required width="300px"/>
                
                <Field.Label>Position</Field.Label>
                <Input type="text" placeholder="Position" value={position} 
                onChange={(e) => setPosition(e.target.value)} required width="300px"/>
           
                <Field.Label>Date applied</Field.Label>
                <Input type="text" placeholder="Date" value={dateApplied} 
                onChange={(e) => setDateApplied(e.target.value)} width="300px"/>
               
                <Field.Label>Status</Field.Label>
                <select name={response} 
                value={response}
                onChange={(e) => setResponse(e.target.value)}>
                    <option value="In progress">In progress</option>
                    <option value="Denied">Denied</option>
                    <option value="In person interview">In person interview</option>
                    <option value="Coding assignment">Coding assignment</option>
                    <option value="Virtual Interview">Virtual Interview</option>
                    <option value="Accepted">Accepted</option>
                    </select>
                <Button type="submit" py={4}>Add</Button>
            </Field.Root>
        </form>
    </div>
  )
}
export default JobForm