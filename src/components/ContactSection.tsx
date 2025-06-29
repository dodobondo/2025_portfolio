// src/components/ContactSection.tsx

"use client";

import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import WaveAnimation from "./WaveAnimation";

const ContactSection = () => {
  const bgColor = useColorModeValue("#fcfcfc", "gray.600");

  return (
    <>
      <WaveAnimation imageSrc="/parts_img/wave.svg" bg={bgColor} />
      <Box
        display="flex"
        id="contact"
        bg="#0071bc"
        height="30vh"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="7xl">
          <VStack py={16} mb={16}>
            <Heading
              as="h1"
              py={2}
              textAlign="center"
              fontSize={{ base: "5xl", md: "7xl" }}
              fontWeight="600"
              color="white"
              opacity={0.9}
            >
              Contact
            </Heading>
            {/* Gmailのボタン */}
            <Flex justify="center" mt={2}>
              <Link
                href="mailto:makino.yeah.work@gmail.com"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<FaEnvelope color="white" />}
                  size={{ base: "md", md: "lg" }}
                  bg="#0071bc"
                  border="0.5px solid white"
                  borderRadius="full"
                  boxShadow="md"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.200",
                  }}
                >
                  <Text fontWeight="400">makino.yeah.work@gmail.com</Text>
                </Button>
              </Link>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default ContactSection;
