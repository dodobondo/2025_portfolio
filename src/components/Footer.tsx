"use client";

import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bgColor} py={6} mt={10} textAlign="center">
      <Text fontSize="sm" color={textColor}>
        © {new Date().getFullYear()} Toshiki Makino. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
