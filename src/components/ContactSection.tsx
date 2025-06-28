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
import { keyframes } from "@emotion/react";
import { FaEnvelope } from "react-icons/fa";

const scroll = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const ContactSection = () => {
  const bgColor = useColorModeValue("#fcfcfc", "gray.600");

  return (
    <>
      <Box position="relative" overflow="hidden" width="100%" bg={bgColor}>
        {/* 波のアニメーション */}
        <Box
          display="flex"
          width="100%"
          animation={`${scroll} 30s linear infinite`}
        >
          <Box
            as="img"
            src="parts_img/wave_over.svg"
            alt="wave"
            width="100%"
            objectFit="cover"
          />
          <Box
            as="img"
            src="parts_img/wave_over.svg"
            alt="wave-copy"
            width="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
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
