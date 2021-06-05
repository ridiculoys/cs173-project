import { useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { StatisticsCard } from "../components/StatisticsCard";
import {
  Container,
  Text,
  Box,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function Request() {
  const [status, setStatus] = useState("Pending")
  const [color, setColor] = useState("gray.300")
  
  const changeStatus = () => {
      console.log("here")
      if (status === "Pending") {
          setStatus("Approved")
          setColor("green.300")
      } else if (status == "Approved") {
        setStatus("Declined")
        setColor("salmon")
      } else {
        setStatus("Pending")
        setColor("gray.300")
      }
  }

  return (
    <>
      <NavigationBar />
      <Container mt="4rem" minW="full" p={2}>
        <title>Appointment</title>
        <Box pb={10}>
          <Stack spacing={0} align={"center"}>
            <Heading>Appointment</Heading>
            <Text textAlign="center">
              {" "}
              <br />
              Request has been created. Please wait for up to 48 hours for a response from our team. <br />
              <b>Reference No. # 37410</b>
              {" "}
            </Text>
          </Stack>
        </Box>

        <Center>
          <Box
            minWidth={500}
            maxWidth={800}
            p={10}
            mb={2}
            bg="beige"
            boxShadow="lg"
            shadow="md"
            borderRadius="3xl"
            minW="xs"
            color="gray.900"
            textAlign="center"
            align={"center"}
          >
            <Stack
              maxwidth={800}
              spacing={10}
              align={"center"}
              alignItems={"center"}
            >
              <Heading textAlign={["center"]} fontSize={["3xl"]}>
                Vaccination Status
              </Heading>

              <Box
                as="button"
                bg={color}
                fontWeight={"bold"}
                fontSize={"2xl"}
                p={5}
                shadow={"s"}
                borderRadius={"xl"}
                onClick={changeStatus}
              >
                  {status}
              </Box>
            </Stack>
          </Box>
        </Center>
        <StatisticsCard />
      </Container>
      <Footer />
    </>
  );
}
