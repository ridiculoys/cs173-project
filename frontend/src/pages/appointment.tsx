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
} from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

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


  return (
    <>
      <Container mt="6rem" minW="full" overflow="scroll" p={2}>
        <title>Home</title>
        <NavigationBar />
          <Heading
            textAlign={["center", "left"]}
            fontSize={["20px", "35px", "40px"]}
            fontWeight="700"
            pb={["15px", "20px", "30px"]}
          >
            Appointment
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
              <Heading
                textAlign={["center"]}
                fontSize={["20px"]}
              >
                Request Vaccination Appointment
              </Heading>
              <FormControl>
                <FormLabel as="legend">Vaccination Facility</FormLabel>
                
              </FormControl>
              <FormControl>
                <FormLabel as="legend">Choose Appointment Date</FormLabel>

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
            </Box>
          </Center>

          <Divider orientation="horizontal" />

          <Heading
            textAlign={["center", "left"]}
            fontSize={["20px", "35px", "40px"]}
            fontWeight="700"
            pb={["15px", "20px", "30px"]}
          >
            Medical Information
          </Heading>
            <Text fontSize="md" colorScheme="gray.100">
              Confirm Medical Information
            </Text>

          {/* Insert Medical Information Here */}
        
        {/* <Flex
          flexWrap="wrap"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          {announcements.slice(0, 3).map((announcement, key) => {
            return (
              <SlideFade
                in={isOpen}
                unmountOnExit={true}
                offsetY={200}
                key={key}
              >
                <Box
                  minW={["xs", "sm", "md"]}
                  maxW={["xs", "sm", "lg"]}
                  borderWidth="1px"
                  borderRadius="lg"
                  m={3}
                >
                  <Box maxH="300px" overflow="hidden">
                    <Image
                      src={announcement.imageUrl}
                      alt={announcement.imageAlt}
                      objectFit="cover"
                    />
                  </Box>

                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        NEW
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {key + 1} &bull; {newsDate}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      textColor="gray.900"
                      fontSize={["md", "lg"]}
                    >
                      {announcement.title}
                    </Box>

                    <Box
                      textColor="gray.500"
                      fontSize={["sm", "md"]}
                      textAlign="justify"
                      mt={2}
                    >
                      {announcement.content}
                    </Box>
                  </Box>
                </Box>
              </SlideFade>
            );
          })}
        </Flex> */}
      </Container>
      <Footer />
    </>
  );
}
