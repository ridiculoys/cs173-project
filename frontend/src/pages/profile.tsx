import React, { useEffect, useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import {
  Container,
  Center,
  Text,
  Box,
  Stack,
  Image,
  Heading,
  Icon,
} from "@chakra-ui/react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Footer } from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import profilePic from "./../assets/profile-picture.png";

const userInfo: {
    imageUrl: any;
    imageAlt: string;
    fullName: string;
    email: string;

}={
    imageUrl: profilePic,
    imageAlt: "Profile Picture",
    fullName: "Juan Dela Cruz",
    email: "jdelacruz@up.edu.ph"
}

const studentInfo: {
    age: number;
    gender: string;
    constituentUniversity: string;
    academicUnit: string;
    course: string;
    yearLevel: string;
}={
    age: 21,
    gender: "Male",
    constituentUniversity: "University of the Philippines Los Baños",
    academicUnit: "College of Arts and Sciences",
    course: "BS Computer Science",
    yearLevel: "Junior"
}

const medicalInfo: {
    diseases: string[];
    allergies: string[];
    medications: string[];
    vaccinationStatus: string;
}={
    diseases: ["None"],
    allergies: ["None"],
    medications: ["None"],
    vaccinationStatus: "Not Vaccinated",
}

export default function Profile() {

    return (
        <>
            <Container mt="4rem" minW="full" p={2}>
                <title>Profile</title>
                <NavigationBar/>
                <Box pb={20}>
                    <Stack spacing={0} align={"center"}>
                        <Heading>User Profile</Heading>
                    </Stack>
                </Box>
                <Center>
                    <Box
                     p={10}
                     mb={70}
                     bg="lightskyblue"
                     boxShadow="m"
                     shadow="m"
                     borderRadius="3xl"
                     minW="xl"
                     maxW="800"
                     color="gray.900"
                     align={"center"}
                    >
                        <Stack
                         maxwidth={800}
                         spacing={5}
                         align={"center"}
                         alignItems={"center"}
                         pb={"10"}
                        >
                            <Image
                                    maxWidth = {300}
                                    src={userInfo.imageUrl}
                                    alt={userInfo.imageAlt}
                                    objectFit="cover"

                            />
                            <Heading 
                             textAlign={"center"} 
                             fontSize={"4xl"}
                             fontWeight={"bold"}
                            >
                                {userInfo.fullName}
                            </Heading>
                            
                            <Heading
                             textAlign={"center"} 
                             fontSize={"xl"}
                            >
                                <Icon as={FcGoogle} w={6} h={6} mr={1}/>
                                {userInfo.email}
                            </Heading>
                        </Stack>
                        <Stack
                            textAlign = {"left"}
                            fontSize={"18px"}
                            pb={"10"}
                            spacing={4}

                        >
                            <Heading
                                textAlign={"left"}
                                fontSize={"2xl"}
                            >
                                Personal Information
                            </Heading>
                            <Text>
                                    <strong>Age:</strong>  {studentInfo.age}
                            </Text>
                            <Text>
                                    <strong>Gender:</strong> {studentInfo.gender}
                            </Text>
                            <Text>
                                    <strong>University:</strong> {studentInfo.constituentUniversity}
                            </Text>
                            <Text>
                                    <strong>Course:</strong> {studentInfo.course}
                            </Text>
                            <Text>
                                    <strong>Year Level:</strong> {studentInfo.yearLevel}
                            </Text>
                        </Stack>
                        <Stack
                            textAlign = {"left"}
                            fontSize={"18px"}
                            pb={"10"}
                            spacing={4}

                        >
                            <Heading
                                textAlign={"left"}
                                fontSize={"2xl"}
                            >
                                Medical Information
                            </Heading>
                            <Text>
                                    <strong>Chronic Diseases:</strong>  {medicalInfo.diseases}
                            </Text>
                            <Text>
                                    <strong>Allergies:</strong>  {medicalInfo.allergies}
                            </Text>
                            <Text>
                                    <strong>Medications:</strong>  {medicalInfo.medications}
                            </Text>
                        </Stack>
                        <Stack>
                            <Heading
                                textAlign={"center"}
                                fontSize={"3xl"}
                                textDecoration={"underline"}
                            >
                                Vaccination Status
                            </Heading>
                            <Box
                                bg={"salmon"}
                                fontWeight={"bold"}
                                fontSize={"2xl"}
                                p={5}
                                shadow={"s"}
                                borderRadius={"xl"}
                                
                            >
                                <Text>{medicalInfo.vaccinationStatus}</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Center>
            </Container>
            <Footer/>
        </>
    )
} 