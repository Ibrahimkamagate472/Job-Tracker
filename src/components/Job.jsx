import { useState } from "react"
import { Table, Button } from "@chakra-ui/react"
const Job = ({name, position, date, response }) => {
  const [newResponse, setNewResponse] = useState(response)

  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{position}</Table.Cell>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>
        <select name={response} value={newResponse}
        onChange={(e) => setNewResponse(e.target.value)}
        >
        <option value="In progress">In progress</option>
        <option value="Denied">Denied</option>
        <option value="In person interview">In person interview</option>
        <option value="Coding assignment">Coding assignment</option>
        <option value="Virtual Interview">Virtual Interview</option>
        <option value="Accepted">Accepted</option>
        </select>
      </Table.Cell>
      <Table.Cell>
        <Button>Edit</Button>
      </Table.Cell>
      <Table.Cell>
        <Button>Delete</Button>
      </Table.Cell>
    </Table.Row>
  )
}
export default Job