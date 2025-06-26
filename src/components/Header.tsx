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
import { useEffect, useState } from "react";

const Header = () => {
  const [isOverBlueSection, setIsOverBlueSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about_page");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const inView = rect.top <= 64 && rect.bottom >= 64;

      setIsOverBlueSection(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初回も実行

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dynamicTextColor = isOverBlueSection
    ? "white"
    : useColorModeValue("gray.700", "whiteAlpha.900");

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
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"wide"}
          px={2}
          color={dynamicTextColor}
        >
          <Link
            href="/"
            _hover={{ textDecoration: "none" }}
            fontFamily="oscine, sans-serif"
            fontWeight="500"
          >
            Toshiki Makino
          </Link>
        </Heading>
        <HStack
          as={"nav"}
          spacing={6}
          px={2}
          display={{ base: "none", md: "flex" }}
          fontWeight="500"
          fontFamily="oscine, sans-serif"
        >
          <Link href="#hero" color={dynamicTextColor} fontSize="xl">
            Home
          </Link>
          <Link href="#about" color={dynamicTextColor} fontSize="xl">
            About Me
          </Link>
          <Link href="#works" color={dynamicTextColor} fontSize="xl">
            Works
          </Link>
          <Link href="#contact" color={dynamicTextColor} fontSize="xl">
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
