"use client";

import {
  Box,
  Container,
  Text,
  Flex,
  VStack,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const bgColor = useColorModeValue("#0071bc", "gray.600");
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box bg="#0071bc">
      {/* relativeはabsoluteの起点になるため必要 */}
      <Container maxW="95vw" py={0} mx="auto" position="relative">
        {/* 点線 */}
        <Box
          mx="auto"
          width="100%"
          borderBottom="1px dashed"
          borderColor="white"
          sx={{
            borderImage:
              "repeating-linear-gradient(to right, white 0, white 5px, transparent 5px, transparent 10px)",
            borderImageSlice: 1,
          }}
          opacity={0.9}
          mb={0}
        />
        <VStack justify="center" py="4">
          <Box>
            <Link href="https://github.com/dodobondo" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                isRound
                bg="white"
                color="gray.700"
                opacity="0.9"
                boxSize={{ base: "40px", md: "48px" }}
                _hover={{
                  bg: "whiteAlpha.800",
                }}
              />
            </Link>
          </Box>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            color={textColor}
            opacity={0.9}
          >
            © {new Date().getFullYear()} Toshiki Makino. All rights reserved.
          </Text>
        </VStack>

        {/* 右側にページトップボタン */}
        <Flex gap={6} position="absolute" bottom="10%" right="3%">
          <IconButton
            aria-label="Scroll to top"
            isRound
            boxSize={{ base: "48px", md: "60px" }}
            color="white"
            bg="#0071bc"
            border="1px solid white"
            boxShadow="md"
            _hover={{
              bg: "whiteAlpha.200",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            icon={<FaArrowUp size="24px" />}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
