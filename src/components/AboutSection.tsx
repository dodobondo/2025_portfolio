// src/components/AboutSection.tsx

"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutSection = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box id="about" bg={bgColor} py={20} px={6}>
      <Container maxW={"7xl"}>
        <Heading
          as="h2"
          textAlign="center"
          mb={10}
          fontFamily="segoe-ui, sans-serif;"
        >
          About me
        </Heading>
        <Text
          as="p"
          fontSize="lg"
          mb={4}
          color={textColor}
          fontFamily="segoe-ui, sans-serif;"
        >
          This is a text.
        </Text>
        <Text
          as="p"
          fontSize="lg"
          mb={4}
          color={textColor}
          fontFamily="var(--font-roboto-mono), monospace"
        >
          ここにText
        </Text>
      </Container>
    </Box>
  );
};

export default AboutSection;
