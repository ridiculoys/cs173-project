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
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import DatePicker from "../components/DatePicker";

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
    name: "UPLB University Health Service",
  },
  {
    name: "UPD University Health Service",
  },
  {
    name: "UPD New Gym",
  },
];

export default function Appointment() {
  const [date, setDate] = useState(null);

  function onDateChange(e) {
    setDate(e);
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
                <DatePicker
                  id="published-date"
                  selectedDate={date}
                  onChange={onDateChange}
                  showPopperArrow={true}
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
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </Center>
        <StatisticsCard />
      </Container>
      <Footer />
    </>
  );
}