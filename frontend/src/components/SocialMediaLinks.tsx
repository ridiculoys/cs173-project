import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaFacebookMessenger, FaFacebook, FaTwitter } from "react-icons/fa";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://www.messenger.com/UPLBOfficial"
      aria-label="Facebook Messenger"
      icon={<FaFacebookMessenger fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.facebook.com/UPLBOfficial"
      aria-label="Facebook"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/UPLBOfficial"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
);
