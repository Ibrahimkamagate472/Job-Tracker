import {
  Flex,
  Heading,
  Button,
  Container,
  Box,
  HStack,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { CheckCheck } from 'lucide-react'
const MainLayout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleClick = () => {
    if (token) {
      navigate('/jobs')
    } else {
      navigate('/login')
    }
  }
  return (
    <Box bg='gray.300' minH='100vh'>
      <Box bg='white' shadow='sm'>
        <Container py={3}>
          <Flex align='center'>
            <HStack gap={2} as={Link} to='/'>
              <CheckCheck />
              <Heading>Job Tracker</Heading>
            </HStack>
            <Spacer />
            <HStack gap={4}>
              <ButtonGroup colorPalette='red'>
                <Button onClick={handleClick} variant='surface'>
                  Tracker
                </Button>
                {token ? (
                  <Button
                    onClick={() => {
                      localStorage.removeItem('token')
                      navigate('/')
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button as={Link} to='/login'>
                    Login
                  </Button>
                )}
              </ButtonGroup>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Box flex='1' bg='gray.50' as='main' minH='100vh' p={4}>
        <Outlet />
      </Box>
    </Box>
  )
}
export default MainLayout
