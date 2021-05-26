import { useEffect, useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import {
  Container,
  Text,
  Flex,
  Box,
  Badge,
  Image,
  Heading,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Textarea,
  Button,
  Center,
  Stack,
  Select,
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import DatePicker from "../components/date-picker";

const vaccination_sites: {
  name: string;
  mapDetails1?: string;
  mapDetails2?: string;
}[] = [
  {
    name: "UPLB Copeland Gymnasium",
  },
  {
    name: "UPLB Main Library",
  },
  {
    name: "UPLB University Health Service"
  },
  {
    name: "UPD University Health Service"
  },
  {
    name: "UPD New Gym"
  }
];

export default function Appointment() {
  const [date, setDate] = useState(null);

  function onDateChange(e) {
    setDate(e)
  }

  return (
    <>
      <NavigationBar />
      <Container mt="6rem" minW="full" overflow="scroll" p={2}>
        <title>Appointment</title>
        <Box pb={20}>
          <Stack spacing={0} align={"center"}>
            <Heading>Appointment</Heading>
            <Text textAlign="center">
              {" "}
              <br />
              Fill up the form to request for a vaccination appointment.
              {" "}
            </Text>
          </Stack>
        </Box>

        <Center>
          <Box
            minWidth={500}
            maxWidth={800}
            p={10}
            bg="beige"
            borderRadius="3xl"
            minW="xs"
            color="gray.900"
            textAlign="center"
            align={"center"}
          >
            <Stack maxwidth={800} spacing={10} align={"center"} alignItems={"center"}>
              <Heading
                textAlign={["center"]}
                fontSize={["3xl"]}
              >
                Request Vaccination Appointment
                <br />
                <br />
              </Heading>
              <FormControl isRequired >
                <FormLabel as="legend">Vaccination Facility</FormLabel>
                <Select variant="outline">
                  {vaccination_sites.map((site,key) => {
                     return (
                      <option key={key} value={site.name.toString().toLowerCase()}>{site.name}</option>
                     )
                  }
                  )}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel as="legend">Choose Appointment Date</FormLabel>
                <DatePicker
                    id="published-date"
                    selectedDate={date}
                    onChange={onDateChange}
                    showPopperArrow={true}
                  />
                <FormHelperText>
                  Note: The appointment you have chosen is not a guarantee that you will be given that slot.
                  The request will still be processed and reviewed by the medical workers administering the vaccines.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel as="legend">Other Information</FormLabel>
                <Textarea
                  // value={textValue}
                  // onChange={handleInputChange}
                  placeholder="What other information would you want us to know?"
                  size="md"
                />
              </FormControl>
                <Button
                  mb={6}
                  colorScheme="green"
                  aria-label="Submit"
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </Center>
      </Container>
      <Footer />
    </>
  );
}
