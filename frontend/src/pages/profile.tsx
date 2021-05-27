import { useEffect, useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import {
  Container,
  Flex,
  Spacer,
  Center,
  Text,
  Box,
  Square,
  Stack,
  Badge,
  Image,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Footer } from "../components/Footer";
import { FeatureContainer } from "../components/Features";
import { FcAbout, FcPlus, FcAssistant } from "react-icons/fc";
import profilePic from "./../assets/profile-picture.png";
import copeland2 from "./../assets/copeland2.jpg";

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

export default function Profile() {

    return (
        <>
            <Container mt="6rem" minW="full" overflow="scroll" p={2}>
                <title>Home</title>
                <NavigationBar/>
                <Heading
                 textAlign={["center", "left"]}
                 fontSize={["20px", "35px", "40px"]}
                 fontWeight="700"
                 pb={["15px", "20px", "30px"]}
                >
                    Profile
                </Heading>
                <Center>
                    <Box
                    w="70%"
                    p={20}
                    m={10}
                    bg="beige"
                    borderRadius="2xl"
                    minW="xs"
                    color="gray.900"
                    textAlign={["center"]}
                    >
                        <Center>
                            <Box>
                                <Box 
                                maxW="300px" 
                                overflow="hidden"
                                >
                                    <Image
                                    src={userInfo.imageUrl}
                                    alt={userInfo.imageAlt}
                                    objectFit="cover"
                                    />
                                </Box>
                                <Box
                                mt="1"
                                fontWeight="bold"
                                as="h1"
                                lineHeight="tight"
                                fontSize={["lg", "xl", "4xl"]}
                                >
                                    {userInfo.fullName}
                                </Box>
                            </Box>
                        </Center>
                        
                        
                        
                    </Box>
                </Center>
            </Container>
            <Footer/>
        </>
    )
} 