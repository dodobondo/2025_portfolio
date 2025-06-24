"use client";

import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Container id="contact" maxW={"7xl"} p="12">
      <Heading as="h2" textAlign="center" mb={10}>
        お問い合わせ
      </Heading>
      <VStack spacing={4} alignItems="center">
        <Text fontSize="lg" color={textColor}>
          ご興味をお持ちいただけましたら、お気軽にご連絡ください。
        </Text>
        <Link
          href="mailto:your.email@example.com"
          fontSize="xl"
          fontWeight="bold"
          color="orange.500"
        >
          your.email@example.com
        </Link>
        <HStack spacing={4} mt={6}>
          <Link href="https://github.com/yourusername" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              isRound
              colorScheme="gray"
            />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              isRound
              colorScheme="blue"
            />
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default ContactSection;
