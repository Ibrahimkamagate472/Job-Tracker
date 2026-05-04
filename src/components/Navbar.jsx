import { Flex, Heading, Button, Container, Box, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CheckCheck } from 'lucide-react'
const Navbar = () => {
  return (
    <Box bg="gray.300" minH="100vh">
        <Box bg="white" shadow="sm">
            <Container py={3}>
                <Flex align="center">
                    <HStack gap={2} as={Link} to="/">
                        <CheckCheck/>
                        <Heading>Job Tracker</Heading>
                        </HStack>
                        <Spacer/>
                        <HStack gap={4}>
                        <Button as={Link} to="/secondpage">Tracker</Button>
                        <Button>Login</Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    </Box>
  )
}
export default Navbar