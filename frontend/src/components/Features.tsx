import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export const FeatureContainer = ({ feature_data }) => {
  return (
    <Box p={4} m={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {feature_data.map((feature, key) => {
          return (
            <Feature
              key={key}
              icon={<Icon as={feature.icon} w={10} h={10} />}
              title={feature.title}
              text={feature.text}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
