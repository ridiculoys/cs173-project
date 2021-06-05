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

export default function Settings() {

  return (
    <>
      <NavigationBar />
      <Container mt="4rem" minW="full" p={2}>
        <title>Settings</title>
        <Box pb={10}>
          <Stack spacing={0} align={"center"}>
            <Heading>Settings</Heading>
            <Text textAlign="center">
              {" "}
              <br />
              Nothing to see here! Imagine this is the settings page.
              {" "}
            </Text>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
