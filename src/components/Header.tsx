// src/components/Header.tsx

"use client";

import {
  Box,
  Flex,
  HStack,
  Link,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Header = () => {
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box
      bg="transparent"
      px={4}
      py={3}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="sticky"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Heading as="h1" size="lg" letterSpacing={"wide"} color={textColor}>
          <Link href="/" _hover={{ textDecoration: "none" }} fontWeight={"normal"}>
            Toshiki Makino
          </Link>
        </Heading>
        <HStack as={"nav"} spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="#hero" color={textColor} fontSize="xl">
            Home
          </Link>
          <Link href="#works" color={textColor} fontSize="xl">
            Works
          </Link>
          <Link href="#about" color={textColor} fontSize="xl">
            About
          </Link>
          <Link href="#contact" color={textColor} fontSize="xl">
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
