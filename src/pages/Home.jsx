import { ButtonGroup, Heading, Button, Container, Box, Text, Stack, HStack, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoveRight, Check } from 'lucide-react'
import { Navbar } from "../components";



export default function Home(){
    return(
            <Container centerContent py={20}>
                <SimpleGrid columns={{base:1, md:2}} gap={6}> 
                    <Stack align="start">
                        <Heading size="2xl">Welcome to Job Tracker</Heading>
                        <Text color="grey.600" fontSize="lg" >Finding a job is hard enough, tracking it shouldn't be</Text>
                        <ButtonGroup colorPalette="red" my={6}>
                            <Button variant="surface" as={Link} to="/secondpage">Go to Tracker</Button>
                            <Button>Login <MoveRight/> </Button>
                        </ButtonGroup>
                        <HStack>
                            <Icon as={Check} color="green.600"/>
                            <Text>Create and manage jobs</Text>
                        </HStack>
                        <HStack>
                            <Icon as={Check} color="green.600"/>
                            <Text>Holds login for each job</Text>
                        </HStack>
                        <HStack>
                        <Icon as={Check} color="green.600"/>
                        <Text>Holds link to orignal job listing</Text>
                        </HStack>
                    </Stack>

                    <Box>
                        <Image src="https://images.unsplash.com/photo-1653038417332-6db0ff9d4bfb?q=80&w=1
                        // 470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV
                        // ufDB8fHx8fA%3D%3D"
                        alt="job"
                        shadow="lg"
                        h = {{base: "250px", md: "400px"}}
                        borderRadius="2xl"
                        />
                    </Box>
                </SimpleGrid>
            </Container>
    )
}