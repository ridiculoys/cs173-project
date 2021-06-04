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
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import vaccine from "../assets/vaccine.jpg";
import vaccine2 from "../assets/vaccine2.jpg";
import vaccine3 from "../assets/vaccine3.jpg";
import { SlideFade } from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Footer } from "../components/Footer";
import { FeatureContainer } from "../components/Features";
import { FcAbout, FcPlus, FcAssistant } from "react-icons/fc";
import copeland from "./../assets/copeland.jpg";
import copeland2 from "./../assets/copeland2.jpg";
import upd_gym from "./../assets/upd_gym.jpg";
import upb from "./../assets/upb.jpg";
import uhs from "./../assets/uhs.jpg";

const features: { icon: any; title: string; text: string }[] = [
  {
    icon: FcPlus,
    title: "Vaccination Request",
    text: "Apply for vaccination in the nearest vaccination centers.",
  },
  {
    icon: FcAbout,
    title: "Vaccination Announcements",
    text: "Be updated on the latest COVID-19 news and vaccination plans.",
  },
  {
    icon: FcAssistant,
    title: "Profile assessment",
    text: "Know your vaccination prioritization through medical information verification",
  },
];
const announcements: {
  imageUrl: any;
  imageAlt: string;
  date?: string;
  title: string;
  content: string;
}[] = [
  {
    imageUrl: vaccine,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    imageUrl: vaccine2,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    imageUrl: vaccine3,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    imageUrl: vaccine,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    imageUrl: vaccine2,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
  {
    imageUrl: vaccine3,
    imageAlt: "Vaccine image",
    title: "Vaccination Rollout!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat nulla at mattis elementum. Aliquam eleifend metus vitae urna dictum, ut tempor felis sollicitudin. In a urna ut orci pulvinar egestas. Sed laoreet placerat vulputate. Donec et lorem augue. Sed elementum egestas eros, sit amet placerat mauris convallis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

const vaccination_sites: {
  name: string;
  img?: any;
  mapDetails2?: string;
}[] = [
  {
    name: "UP Baguio Himnasio Amianan",
    img: upb,
  },
  {
    name: "UPD Gymnasium",
    img: upd_gym,
  },
  {
    name: "UPLB Copeland Gymnasium",
    img: copeland,
  },
  {
    name: "UPLB Main Library",
    img: copeland2,
  },
  {
    name: "UPLB University Health Service",
    img: uhs,
  },
];

export default function Home() {
  const { isOpen } = useDisclosure({
    defaultIsOpen: true,
  });

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

  const newsDate = createDate(-3).toDateString();

  return (
    <>
      <NavigationBar />
      <Container mt="6rem" minW="full" p={2}>
        <title>Home</title>
        <FeatureContainer feature_data={features} />
        <Box p={20}>
          <Stack spacing={0} align={"center"} mb={["8"]}>
            <Heading>Vaccination Sites</Heading>
            <Text align="center">
              {" "}
              Browse the timeline of vaccination sites around Los Banos.{" "}
            </Text>
          </Stack>
          {/* Lazy loaded, initial focus to first tab. */}

          <Tabs isLazy isFitted={true} defaultIndex={0}>
            <TabList overflowX="auto" overflowY="hidden">
              {vaccination_sites.map((site, key) => {
                return <Tab key={key}> {site.name} </Tab>;
              })}
            </TabList>
            <TabPanels>
              {vaccination_sites.map((site, key) => {
                return (
                  <TabPanel key={key}>
                    <Stack
                      py={16}
                      px={8}
                      spacing={{ base: 8, md: 10 }}
                      align={"center"}
                      direction={"column"}
                    >
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign={"center"}
                        maxW={"3xl"}
                      >
                        {site.name}
                      </Text>
                      <Box
                        textAlign={"center"}
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="center"
                      >
                        <Box
                          maxW={["80%", "60%", "40%"]}
                          mb={2}
                          objectFit="contain"
                          borderRadius="lg"
                          overflow="hidden"
                          boxShadow="lg"
                        >
                          <Image
                            src={site.img}
                            alt={"Jenny Wilson"}
                            width="100%"
                            height="100%"
                          />
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Calendar
                            date={new Date()}
                            disabledDates={generateDisabledDates()}
                            editableDateInputs={false}
                            minDate={new Date()}
                            color="#009183"
                            supressHydrationWarning
                          />
                          <Text fontWeight={600}>
                            Vaccination site calendar
                          </Text>
                          <Text
                            fontSize={"sm"}
                            color={useColorModeValue("red.400", "red.400")}
                            maxW="80%"
                          >
                            Disabled days means the day is fully booked for
                            vaccination appointments.
                          </Text>
                        </Box>
                      </Box>
                    </Stack>
                    <Box
                      m={2}
                      textAlign="center"
                      d="flex"
                      justifyContent="center"
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        fontFamily: "font-family: 'Trebuchet MS', sans-serif",
                      }}
                    ></Box>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Box>
        <Stack spacing={0} align={"center"} mb={["5", "8"]}>
          <Heading>Announcements</Heading>
          <Text align="center">
            Be updated in the latest announcements about the campus vaccination
            plans.
          </Text>
        </Stack>
        <Flex
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
                  borderRadius="xl"
                  boxShadow="lg"
                  m={3}
                  overflow="hidden"
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
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
