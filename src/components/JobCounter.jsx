import {Text, Box} from "@chakra-ui/react"
const JobCounter = ({jobs}) => {
  return (
    <Box alignContent="end">
        <Text fontSize="20px"> There is {jobs.length} jobs you are tracking</Text>
    </Box>
  )
}
export default JobCounter