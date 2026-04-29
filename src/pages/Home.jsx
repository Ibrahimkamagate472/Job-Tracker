import { Box, Heading, Text, Button, Stack, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import JobForm from "../components/JobForm";

export default function Home(){
    return(
        <>
            <Container>
                <Heading size="4xl">Make Job Tracking Easier</Heading>
                <Button variant='surface' as={Link} to='./JobList.jsx'>Login in</Button>
                <Button variant='surface' as={Link} to='/tasks'>Welcome </Button>
            </Container>
        </>
    )
}