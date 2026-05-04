import Job from "./Job"

export const jobReducer = (jobs, action) =>{
    if(action.type === "add"){
        const newJob = {
            id: jobs.length + 1,
            name: action.name,
            position: action.position,
            date: action.date,
            response: action.response,
            username: action.username,
            password: action.password,
            listing: action.listing
        }
        return [...jobs, newJob] 

    }else if(action.type === "edit"){
        return jobs.map((job, idx) =>
            idx === action.index
            ? { ...job, 
            name: action.name, position: action.position ,date: action.date ,
            username: action.username, password: action.password, listing: action.listing
            }
            : job
        )

    }else if(action.type === "delete"){
        return  jobs.filter((job, index) => index !== action.index)
    }
    return jobs
}