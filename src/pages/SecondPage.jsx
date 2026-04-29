// import { useState } from "react";

import { useReducer } from "react"
import { JobList, jobReducer, JobForm } from "../components/index"

export default function SecondPage(){
    // const [editCompany, setEditCompany] = useState(" ")
    // const [editJob, setEditJob] = useState(" ")
    // const [editDate, setEeditDate] = useState(" ")
    const initialJobs  = [
    {
        id:1,
        name: "Google",
        position: "Software Engineering",
        date: "04/01/2026",
        response: false,
    },{
        id:2,
        name: "Amazon",
        position: "Software Devlopment",
        date: "04/07/2026",
        response: false,
    },{
        id:3,
        name: "Hunter",
        position: "IT",
        date: "04/07/2026",
        response: false,
    }
    ]
    const [jobs, dispatch] = useReducer(jobReducer, initialJobs)

    const addJob = (name, position, date) =>{
        dispatch({
            type:"add",
            name,
            position,
            date})
    }


    return (
        <div>
            <JobForm addJob = {addJob}/>
            <JobList jobs={jobs}/>
        </div>
    )

}