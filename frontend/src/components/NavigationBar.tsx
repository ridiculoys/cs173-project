import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import logo from "./../assets/uplb-logo-name.png";

const Links = ['Home', 'Appointment', 'About'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={'/' + children.toString().toLowerCase()} passHref>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
    {children === 'About' ? 'About Us' : children}
    </Link>
  </NextLink>
);

export function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image
                src={logo}
                alt={`UPLB Logo`}
                objectFit="cover"
                height="3rem"
                width="auto"
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<MoonIcon />}
              onClick={toggleColorMode}>
              Mode
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.dlpng.com/static/png/6616485_preview.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <NextLink href="/profile" passHref>
                  <MenuItem>
                      Profile
                  </MenuItem>
                </NextLink>
                <NextLink href="/settings" passHref>
                  <MenuItem>Settings</MenuItem>
                </NextLink>
                <MenuDivider />
                <NextLink href="/" passHref>
                  <MenuItem>Logout</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}