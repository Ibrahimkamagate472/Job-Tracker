import Job from "./Job"

export const jobReducer = (jobs, action) =>{
    if(action.type === "add"){
        const newJob = {
            id: jobs.length + 1,
            name: action.name,
            position: action.position,
            date: action.date,
            response: false
        }
        return [...jobs, newJob] 
    }
    // switch(action){
    //     case "add":{
    //         console.log("hi")
    //         const newJob = {
    //             id: jobs.length + 1,
    //             name: action.name,
    //             position: action.position,
    //             date: action.date,
    //             response: false
    //         }
    //         return [...jobs, newJob]
    //     }
    //     case "remove":
    //         break
    //     case "update":
    //         break
    //     default:
    //         return jobs
        
    // }

}