import { useState } from 'react'
import { Table, Button, Input, Link } from '@chakra-ui/react'
const Job = ({
  name,
  position,
  date,
  response,
  username,
  password,
  listing,
  deleteJob,
  index,
  editJob,
}) => {
  const [newResponse, setNewResponse] = useState(response)
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(name)
  const [newPosition, setNewPosition] = useState(position)
  const [newDate, setNewDate] = useState(date)
  const [newUsername, SetNewUsername] = useState(username)
  const [newPassword, setNewPassword] = useState(password)
  const [newListing, setNewListing] = useState(listing)

  const handleSave = () => {
    editJob(
      index,
      newName,
      newPosition,
      newDate,
      newUsername,
      newPassword,
      newListing
    )
    setIsEditing(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      onCancel()
    }
  }

  const onCancel = () => {
    setIsEditing(false)
  }

  return (
    <Table.Row colorPalette='red.300'>
      <Table.Cell>
        {isEditing ? (
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          name
        )}
      </Table.Cell>
      <Table.Cell>
        {isEditing ? (
          <Input
            value={newPosition}
            onChange={(e) => setNewPosition(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          position
        )}
      </Table.Cell>
      <Table.Cell>
        {isEditing ? (
          <Input
            type='date'
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          date || 'N/A'
        )}
      </Table.Cell>
      <Table.Cell>
        <select
          name={response}
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
        >
          <option value='In progress'>In progress</option>
          <option value='Denied'>Denied</option>
          <option value='In person interview'>In person interview</option>
          <option value='Coding assignment'>Coding assignment</option>
          <option value='Virtual Interview'>Virtual Interview</option>
          <option value='Accepted'>Accepted</option>
          <option value='Ghosted'>Ghosted</option>
        </select>
      </Table.Cell>

      <Table.Cell>
        {isEditing ? (
          <Input
            value={newUsername}
            onChange={(e) => SetNewUsername(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          username
        )}
      </Table.Cell>

      <Table.Cell>
        {isEditing ? (
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          password
        )}
      </Table.Cell>

      <Table.Cell>
        {isEditing ? (
          <Input
            value={newListing}
            onChange={(e) => setNewListing(e.target.value)}
            onKeyDown={handleKey}
          />
        ) : (
          <Link href={listing} target='_blank'>
            Listing
          </Link>
        )}
      </Table.Cell>

      <Table.Cell>
        {isEditing ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} colorPalette='red'>
            Edit
          </Button>
        )}
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => deleteJob(index)} colorPalette='red'>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}
export default Job
