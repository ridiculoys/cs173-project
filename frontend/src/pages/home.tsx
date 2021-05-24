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
  Badge,
  Image,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import vaccine from "../assets/vaccine.jpg";
import vaccine2 from "../assets/vaccine2.jpg";
import vaccine3 from "../assets/vaccine3.jpg";
import { SlideFade } from "@chakra-ui/react";
import HeatMap from "react-heatmap-grid";
import { Footer } from "../components/Footer";

import MapChart from "../map-assets/MapChart";

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
  mapDetails1?: string;
  mapDetails2?: string;
}[] = [
  {
    name: "Copeland Gymnasium",
  },
  {
    name: "UPLB Main Library",
  },
];

export default function Home() {
  const { isOpen } = useDisclosure({
    defaultIsOpen: true,
  });
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const datenow = new Date();

  const createDate = (offset) => {
    return new Date(
      datenow.getFullYear(),
      datenow.getMonth(),
      datenow.getDate() + offset
    );
  };

  const newsDate = createDate(-3).toDateString();

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const yLabels = new Array(4).fill(0).map((_, i) => `Week ${i + 1}`);
  const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <>
      <Container mt="6rem" minW="full" overflow="scroll" p={2}>
        <title>Home</title>
        <Box>
          <Heading
            textAlign={["center", "left"]}
            fontSize={["20px", "35px", "40px"]}
            fontWeight="700"
            pb={["15px", "20px", "30px"]}
          >
            Vaccination Sites
          </Heading>

          {/* Lazy loaded, initial focus to first tab. */}

          <Tabs isLazy defaultIndex={0}>
            <TabList>
              {vaccination_sites.map((site, key) => {
                return <Tab key={key}> {site.name} </Tab>;
              })}
            </TabList>
            <TabPanels>
              {vaccination_sites.map((site, key) => {
                return (
                  <TabPanel key={key}>
                    <Box>Vaccination Heatmap:</Box>
                    <Box>
                      {" "}
                      Greener boxes indicate lower appointments for the day.
                    </Box>
                    <Box
                      m={2}
                      textAlign="center"
                      d="flex"
                      justifyContent="center"
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        fontFamily: "font-family: 'Trebuchet MS', sans-serif;",
                      }}
                      suppressHydrationWarning
                    >
                      <HeatMap
                        xLabels={xLabels}
                        yLabels={yLabels}
                        xLabelsLocation={"bottom"}
                        xLabelWidth={60}
                        data={data}
                        squares
                        height={45}
                        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                        cellStyle={(
                          background,
                          value,
                          min,
                          max,
                          data,
                          x,
                          y
                        ) => ({
                          background: `rgb(0, 163, 27, ${
                            (max - value) / (max - min)
                          })`,
                          fontSize: "11.5px",
                          fontWeight: "none",
                          color: "#444",
                        })}
                        cellRender={(value) => value && <div>{value}</div>}
                      />
                    </Box>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Box>
        <Heading
          textAlign={["center", "left"]}
          fontSize={["20px", "35px", "40px"]}
          fontWeight="700"
          pb={["15px", "20px", "30px"]}
        >
          Announcements
        </Heading>
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
        </Flex>
      </Container>
      <Footer />
    </>
  );
}
