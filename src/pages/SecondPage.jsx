import { useReducer } from "react"
import { JobList, jobReducer, JobForm, JobCounter} from "../components/index"
import { Flex } from "@chakra-ui/react"

export default function SecondPage(){
    const initialJobs  = [
    {
        id:1,
        name: "Google",
        position: "Software Engineering",
        date: "04/01/2026",
        response: "In progess",
        username: "Sample",
        password: "sample",
        listing: "https://google.com"
    },{
        id:2,
        name: "Amazon",
        position: "Software Devlopment",
        date: "04/07/2026",
        response: "Denied",
        username: "Sample",
        password: "sample",
        listing: "https://google.com"
    },{
        id:3,
        name: "Hunter",
        position: "IT",
        date: "04/07/2026",
        response: "Coding assignment",
        username: "Sample",
        password: "sample",
        listing: "https://google.com"
    }
    ]
    const [jobs, dispatch] = useReducer(jobReducer, initialJobs)

    const addJob = (name, position, date, response, username, password, listing) =>{
        dispatch({
            type:"add",
            name,
            position,
            date,
            response,
            username,
            password,
            listing
        })
    }

    const deleteJob = (index) =>{
        dispatch({
            type:"delete",
            index
        })
    }
    const editJob = (index, name, position, date, username, password, listing) =>{
        dispatch({
            type:"edit",
            index,
            name,
            position,
            date,
            username,
            password,
            listing
        })
    }


    return (
        <div>
            <Flex gap={10}>
            <JobForm addJob = {addJob}/>
            <JobCounter jobs={jobs}/>
            </Flex>
            <Flex mt={30}>
            <JobList jobs={jobs} deleteJob={deleteJob} editJob={editJob}/>
            </Flex>
        </div>
    )

}