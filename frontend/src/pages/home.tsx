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
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import vaccine from "../assets/vaccine.jpg";
import vaccine2 from "../assets/vaccine2.jpg";
import vaccine3 from "../assets/vaccine3.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

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
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const { isOpen, onOpen } = useDisclosure({
    defaultIsOpen: true,
  });
  const datenow = new Date();

  const newsDate = new Date(
    datenow.getFullYear(),
    datenow.getMonth(),
    datenow.getDate() - 3
  );

  useEffect(() => {
    console.log(`${start} to ${end}`);
  }, [start, end]);

  return (
    <>
      <NavigationBar />
      <Container
        mt="6rem"
        minW="full"
        border="2px"
        borderColor="red.500"
        overflow="scroll"
        p={2}
      >
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
          <Tabs isLazy defaultIndex={1}>
            <TabList>
              {vaccination_sites.map((site, key) => {
                return <Tab> {site.name} </Tab>;
              })}
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Heading
          textAlign={["center", "left"]}
          fontSize={["20px", "35px", "40px"]}
          fontWeight="700"
          pb={["15px", "20px", "30px"]}
        >
          ANNOUNCEMENTS
        </Heading>
        <Flex
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          {start - 3 >= 0 ? (
            <IconButton
              colorScheme="blue"
              aria-label="Previous"
              size="lg"
              position="fixed"
              left="10px"
              onClick={() => {
                setStart(start - 3);
                setEnd(end - 3);
                onOpen();
                console.log(`start`);
              }}
              icon={<ArrowLeftIcon />}
            />
          ) : (
            <></>
          )}
          {announcements.slice(start, end).map((announcement, key) => {
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
                  <Image
                    src={announcement.imageUrl}
                    alt={announcement.imageAlt}
                  />

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
                        {key + 1} &bull; {newsDate.toDateString()}
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
          {end < announcements.length ? (
            <IconButton
              colorScheme="blue"
              aria-label="Next"
              size="lg"
              position="fixed"
              right="40px"
              onClick={() => {
                setStart(start + 3);
                setEnd(end + 3);
                onOpen();
              }}
              icon={<ArrowRightIcon />}
            />
          ) : (
            <></>
          )}
        </Flex>
      </Container>
    </>
  );
}
