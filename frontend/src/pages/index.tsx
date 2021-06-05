import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Checkbox,
  FormControl,
  FormLabel,
  Box,
  Link,
  Stack,
  Image,
  Text,
  Textarea,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRef } from "react";
import { FcAbout, FcPlus, FcAssistant } from "react-icons/fc";
import { FeatureContainer } from "../components/Features";
import uplb_logo from "../assets/uplb-logo-name.png";

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

export default function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <Box>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack align="center">
            <Image
              src={uplb_logo}
              alt={"UPLB Logo"}
              width="30%"
              height="auto"
              py={"5"}
            />
            <Stack spacing={4} w={"full"} maxW={"md"} p={5}>
              <Heading fontSize={"2xl"}>Sign in to Vaccine-UP</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  placeholder="Enter your UP Mail"
                  variant="filled"
                  mb={3}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="********"
                  variant="filled"
                  mb={6}
                  type="password"
                />
              </FormControl>
              <Stack spacing={6}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.500"}>Forgot password?</Link>
                </Stack>
                <Button
                  mb={6}
                  colorScheme="blue"
                  onClick={onOpen}
                  aria-label="Login"
                >
                  Login
                </Button>
                <Button onClick={toggleColorMode} colorScheme="green">
                  Change Light/Dark Mode
                </Button>
              </Stack>
            </Stack>
            <FeatureContainer feature_data={features} />
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/ap-images/2021/03/e92297d46510366a3d078deb5370f0e6.jpg?itok=mNZMgfEE"
            }
          />
        </Flex>
      </Stack>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Stack spacing={4} mt={5}>
              <Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }}>
                Complete registration
              </Heading>
              <Text fontSize={{ base: "sm", sm: "md" }}>
                Please fill-up the necessary details so that we can properly
                assess your profile. This will help the medical frontliners to
                identify your current group for vaccine prioritization.
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input ref={initialRef} type="number" placeholder="e.g. 21" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input placeholder="Male / Female / Rather not say" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Constituent University</FormLabel>
              <Input placeholder="e.g. UP Los Banos, UP Manila" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>College/ Academic Unit </FormLabel>
              <Input placeholder="e.g. CAS, CSC, CEAT " />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Course</FormLabel>
              <Input placeholder="e.g. Computer Science, Chemistry, MST" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Year Level</FormLabel>
              <Input placeholder="e.g. Sophomore, Junior" />
            </FormControl>
            <Flex direction={["column", "row"]} mt={3}>
              <Stack mt={1.5}>
                <Checkbox>Asthma</Checkbox>
                <Checkbox>Arthritis</Checkbox>
                <Checkbox>Crohn's Disease</Checkbox>
                <Checkbox>Diabetes</Checkbox>
                <Checkbox>Heart Disease</Checkbox>
              </Stack>
              <Spacer />
              <Stack mt={1.5}>
                <Checkbox>Heart Failure</Checkbox>
                <Checkbox>High Blood Pressure</Checkbox>
                <Checkbox>Hypertension</Checkbox>
                <Checkbox>Respiratory Issues</Checkbox>
                <Checkbox>Other</Checkbox>
              </Stack>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Allergies</FormLabel>
              <Textarea placeholder="e.g. dust mites, latex, ibuprofen" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Medications</FormLabel>
              <Textarea placeholder="e.g. rosuvastatin, alubterol, esomeprazole" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <NextLink href="/home" passHref>
              <Button colorScheme="blue" mr={3} textColor="white">
                Submit
              </Button>
            </NextLink>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Login</Heading>
          <Input placeholder="UP Mail" variant="filled" mb={3} type="email" />
          <Input
            placeholder="********"
            variant="filled"
            mb={6}
            type="password"
          />

          <NextLink href="/home" passHref>
            <Button mb={6} colorScheme="red" aria-label="Login">
              Login
            </Button>
          </NextLink>
          <Button onClick={toggleColorMode} colorScheme="green">
            Change Light/Dark Mode
          </Button>
        </Flex>
      </Flex> */}
    </Box>
  );
}
