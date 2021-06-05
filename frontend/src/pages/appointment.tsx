import { useEffect, useRef, useState } from "react";
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
import NextLink from "next/link";
import Moment from "moment";

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
  const [facility, setFacility] = useState('');
  const [info, setInfo] = useState('');

  const initialRef = useRef();
  const finalRef = useRef();

  function convert(date) {
    if (date != null) {
      const  mnth = ("0" + (date.getMonth() + 1)).slice(-2);
      const  day = ("0" + date.getDate()).slice(-2);
      return [mnth, day, date.getFullYear()].join("-");
    }
    return "";
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
              </Heading>
                <FormControl isRequired>
                  <FormLabel as="legend" p={5}>Vaccination Facility</FormLabel>
                  <Select
                    value={facility}
                    variant="outline"
                    border="1px"
                    borderColor="twitter.900"
                    isRequired
                    onChange={(evt) => setFacility(evt.target.value)}
                  >
                    <option
                      key={-1}
                      value={"Select option"}
                    >
                      {"Select Option"}
                    </option>
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
                  <FormLabel as="legend" p={5}>Choose Appointment Date</FormLabel>
                  <Calendar
                    date={date}
                    value={date}
                    minDate={new Date()}
                    onChange={(item) => {setDate(item)}}
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
                  <FormLabel as="legend" p={5}>Other Information</FormLabel>
                  <Textarea
                    value={info}
                    variant="outline"
                    size="md"
                    border="1px"
                    borderColor="twitter.900"
                    onChange={(evt) => setInfo(evt.target.value)}
                  />
                </FormControl>
                <Button
                  colorScheme="blue"
                  size="md"
                  width="30%"
                  aria-label="Submit"
                  onClick={onOpen}
                >
                  Submit
                </Button>
            </Stack>
          </Box>
        </Center>
        <StatisticsCard />
      </Container>
      <Footer />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }}>
              Confirm Request
            </Heading>
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody pb={6}>
            <Text>
              <br />
              <b>Vaccination Facility:</b> {facility.toUpperCase()}
              <br />
              <b>Date:</b> {convert(date)}
              <br />
              <b>Other Information:</b> {info.toUpperCase()}
              <br />
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Back</Button>
            
            <NextLink href="/request" passHref>
              <Button colorScheme="blue" mr={3} onClick={onClose}>Confirm</Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
