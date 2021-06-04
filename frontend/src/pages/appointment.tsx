import { useEffect, useState } from "react";
import { NavigationBar } from "../components/NavigationBar";
import { StatisticsCard } from "../components/StatisticsCard";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const vaccination_sites: {
  name: string;
}[] = [
  {
    name: 'UP Baguio Himnasio Amianan'
  },
  {
    name: "UPD Gymnasium"
  },
  {
    name: "UPLB Copeland Gymnasium"
  },
  {
    name: "UPLB Main Library"
  },
  {
    name: "UPLB University Health Service"
  }
];

export default function Appointment() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [date, setDate] = useState(null);

  const datenow = new Date();

  //Create random disabled dates.
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 2;
  }

  const createDate = (offset) => {
    return new Date(
      datenow.getFullYear(),
      datenow.getMonth(),
      datenow.getDate() + getRandomInt(offset)
    );
  };

  const dt = new Date();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();

  const generateDisabledDates = () => {
    return [
      createDate(daysInMonth * 2 - datenow.getDate()),
      createDate(daysInMonth * 2 - datenow.getDate()),
      createDate(daysInMonth * 2 - datenow.getDate()),
      createDate(daysInMonth * 2 - datenow.getDate()),
    ];
  };

  componentDidUpdate() {
    
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
              Fill up the form to request for a vaccination appointment.{" "}
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
                Request Vaccination Appointment
                <br />
                <br />
              </Heading>
              <FormControl isRequired>
                <FormLabel as="legend">Vaccination Facility</FormLabel>
                <Select
                  variant="outline"
                  border="1px"
                  borderColor="twitter.900"
                  isRequired
                >
                  {vaccination_sites.map((site, key) => {
                    return (
                      <option
                        key={key}
                        value={site.name.toString().toLowerCase()}
                      >
                        {site.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel as="legend">Choose Appointment Date</FormLabel>
                <Calendar
                  date={date}
                  minDate={new Date()}
                  disabledDates={generateDisabledDates()}
                  onChange={(item) => setDate(item)}
                  color="#009183"
                  supressHydrationWarning
                  isRequired
                />
                <FormHelperText color="gray.700">
                  Note: The appointment you have chosen is not a guarantee that
                  you will be given that slot. The request will still be
                  processed and reviewed by the medical workers administering
                  the vaccines.
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel as="legend">Other Information</FormLabel>
                <Textarea
                  variant="outline"
                  size="md"
                  border="1px"
                  borderColor="twitter.900"
                />
              </FormControl>
              <Button
                colorScheme="green"
                size="md"
                width="30%"
                aria-label="Submit"
                onClick={onOpen}
              >
                Submit
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Confirm Request</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                      <Text>
                        Hello there you
                      </Text>
                    </ModalBody>

                    <ModalFooter>
                      <Button variant="ghost">Back</Button>
                      <Button colorScheme="green" mr={3} onClick={onClose}>Confirm</Button>
                    </ModalFooter>
                  </ModalContent>
              </Modal>
            </Stack>
          </Box>
        </Center>
        <StatisticsCard />
      </Container>
      <Footer />
    </>
  );
}
