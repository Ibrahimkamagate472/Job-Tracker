const JobList = ({jobs = []}) => {
    if(jobs.length === 0){
        return <p>Currently no jobs to track.</p>
    }
  return (
    <div>
        {jobs.map((job) => 
        <div key={job.id}>
          <h1>Company: {job.name}</h1>
          <h3>Position: {job.position}</h3>
          <h3>Date Applied: {job.date}</h3>

        </div>
        )}

        {/* {tasks.map((task, index) => 
                (<Task
                key={index} 
                index={index}
                //the spread operator is just passing the rest of the properites for each object
                {...task}
                // deleteTask={deleteTask}
                // updateCompleted = {updateCompleted}
                // updateDescription={updateDescription}
                />))} */}

    </div>
  )
}
export default JobList