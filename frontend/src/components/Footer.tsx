import { Box, Stack, Text, Image } from "@chakra-ui/react";
import * as React from "react";
import { SocialMediaLinks } from "./SocialMediaLinks";
import logo from "../assets/uplb-logo.png";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Box maxW={20} minW={20}>
          <Image src={logo} objectFit="cover" />
        </Box>
        <SocialMediaLinks />
      </Stack>
      <Text fontSize="sm">
        CMSC 173 - ST4L: Vaccine UP. All rights reserved.
      </Text>
    </Stack>
  </Box>
);
