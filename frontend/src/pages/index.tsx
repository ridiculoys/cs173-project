import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function Login() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
          <Input placeholder="UP Mail" variant="filled" mb={3} type="email"/>
          <Input placeholder="********" variant="filled" mb={6} type="password"/>

          <NextLink href="/home" passHref>
            <Button
              mb={6}
              colorScheme="red"
              aria-label="Login"
            >Login</Button>
          </NextLink>
          <Button onClick={toggleColorMode} colorScheme="green">Change Light/Dark Mode</Button>
      </Flex>
    </Flex>
  )
}
