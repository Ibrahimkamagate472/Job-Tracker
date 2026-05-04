import { useState } from "react"
import {Input, Button, Field, SimpleGrid} from "@chakra-ui/react"
import JobCounter from "./JobCounter"

const JobForm = ({addJob}) => {
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [dateApplied, setDateApplied] = useState("")
    const [response, setResponse] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [listing, setListing] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(company.trim() === "" || position.trim() === ""){
            return
        }

        if(dateApplied.trim() === ""){
            setDateApplied("")
        }
        
        addJob(company, position, dateApplied, response, username, password, listing)
        setCompany("")
        setPosition("")
        setDateApplied("")
        setResponse("In progess")
        setUsername("")
        setPassword("")
        setListing("")
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <SimpleGrid  gap={4} columns={{ base: 1, md: 2 }} maxW="650px" >
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
            </Field.Root>

            <Field.Root>
                <Field.Label>Username/Email</Field.Label>
                <Input width="300px" placeholder="Enter username" type="text"
                value={username} onChange={(e) => setUsername(e.target.value)}/>

                <Field.Label>Password</Field.Label>
                <Input width="300px" placeholder="Enter password" type="text"
                value={password} onChange={(e) => setPassword(e.target.value)}/>

                <Field.Label>Link</Field.Label>
                <Input width="300px" placeholder="Enter link to job listing" type="text"
                value={listing} onChange={(e) => setListing(e.target.value)}/>

                <Button type="submit" py={4} colorPalette="red">Add</Button>
            </Field.Root>
            </SimpleGrid> 
            
        </form>
    </div>
  )
}
export default JobForm