// /src/components/AboutPageSection.tsx

"use client";

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const AboutPageSection = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <>
      <Box
        display="flex"
        id="about_page"
        bg={bgColor}
        py={10}
        px={6}
        backgroundColor="#0071bc"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxW="7xl">
          <Heading
            as="h1"
            textAlign="center"
            mb={4}
            mt={-20}
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="500"
            color="white"
            opacity={0.9}
          >
            ようこそ
          </Heading>
          <Text
            as="p"
            textAlign="center"
            fontSize="xl"
            lineHeight="1.7"
            color="white"
            opacity={0.9}
          >
            このサイトを訪れてくださり、誠にありがとうございます。
            <br />
            ここは Makino のポートフォリオサイトです。
            <br />
            私のことを知る旅を、ゆったりとお楽しみください。
          </Text>
        </Container>
      </Box>

      <Box
        position="relative"
        overflow="hidden"
        height="100px"
        width="100%"
        bg="#fcfcfc"
      >
        <Box
          display="flex"
          width="100%"
          animation={`${scroll} 30s linear infinite`}
        >
          <Box
            as="img"
            src="parts_img/wave.svg"
            alt="wave"
            width="100%"
            objectFit="cover"
          />
          <Box
            as="img"
            src="parts_img/wave.svg"
            alt="wave-copy"
            width="100%"
            objectFit="cover"
          />
        </Box>
      </Box>
    </>
  );
};

export default AboutPageSection
