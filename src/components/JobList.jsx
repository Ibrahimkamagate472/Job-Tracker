import { Table} from "@chakra-ui/react"
import Job from "./Job"
const JobList = ({jobs = [], deleteJob, editJob}) => {
    if(jobs.length === 0){
        return <p>Currently no jobs to track.</p>
    }
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Company</Table.ColumnHeader>
          <Table.ColumnHeader>Position</Table.ColumnHeader>
          <Table.ColumnHeader>Date Applied</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          <Table.ColumnHeader>Edit</Table.ColumnHeader>
          <Table.ColumnHeader>Delete</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
          {jobs.map((job, index) => <Job key={job.id} index={index} 
          {...job} deleteJob={deleteJob} editJob={editJob}/>)}
      </Table.Body>
    </Table.Root>
  )
}
export default JobList