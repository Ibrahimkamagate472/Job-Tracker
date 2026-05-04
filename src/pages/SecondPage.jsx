import { useReducer } from "react"
import { JobList, jobReducer, JobForm } from "../components/index"

export default function SecondPage(){
    const initialJobs  = [
    {
        id:1,
        name: "Google",
        position: "Software Engineering",
        date: "04/01/2026",
        response: "In progess",
    },{
        id:2,
        name: "Amazon",
        position: "Software Devlopment",
        date: "04/07/2026",
        response: "Denied",
    },{
        id:3,
        name: "Hunter",
        position: "IT",
        date: "04/07/2026",
        response: "Coding assignment",
    }
    ]
    const [jobs, dispatch] = useReducer(jobReducer, initialJobs)

    const addJob = (name, position, date, response) =>{
        dispatch({
            type:"add",
            name,
            position,
            date,
            response})
    }

    const deleteJob = (index) =>{
        dispatch({
            type:"delete",
            index
        })
    }
    const editJob = (index, name, position, date) =>{
        dispatch({
            type:"edit",
            index,
            name,
            position,
            date
        })
    }


    return (
        <div>
            <JobForm addJob = {addJob}/>
            <JobList jobs={jobs} deleteJob={deleteJob} editJob={editJob}/>
        </div>
    )

}