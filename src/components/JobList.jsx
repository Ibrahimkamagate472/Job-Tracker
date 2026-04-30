import { Table, Box, Select, Button } from "@chakra-ui/react"
const JobList = ({jobs = []}) => {
    if(jobs.length === 0){
        return <p>Currently no jobs to track.</p>
    }
  return (
      <Box>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Company</Table.ColumnHeader>
              <Table.ColumnHeader>Position</Table.ColumnHeader>
              <Table.ColumnHeader>Date Applied</Table.ColumnHeader>
              <Table.ColumnHeader>Response</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {jobs.map((job) => 
            <Table.Row key={job.id}>
              <Table.Cell>{job.name}</Table.Cell>
              <Table.Cell>{job.position}</Table.Cell>
              <Table.Cell>{job.date}</Table.Cell>
              <Table.Cell>
                <Select.Root>
                </Select.Root>
              </Table.Cell>
              <Table.Cell>
                <Button>Delete</Button>
              </Table.Cell>
            </Table.Row>
          )}
            </Table.Body>
        </Table.Root>
      </Box>
  )
}
export default JobList