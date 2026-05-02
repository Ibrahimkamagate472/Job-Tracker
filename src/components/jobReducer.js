import Job from "./Job"

export const jobReducer = (jobs, action) =>{
    if(action.type === "add"){
        const newJob = {
            id: jobs.length + 1,
            name: action.name,
            position: action.position,
            date: action.date,
            response: action.response
        }
        return [...jobs, newJob] 

    }else if(action.type === "edit"){
        return

    }else if(action.type === "delete"){
        return
    }
    return jobs
}