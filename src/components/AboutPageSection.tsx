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
        id="about_page"
        bg={bgColor}
        py={20}
        px={6}
        backgroundColor="#0071bc"
      >
        <Container maxW="7xl">
          <Heading
            as="h3"
            textAlign="center"
            mb={10}
            fontFamily="segoe-ui, sans-serif"
            fontWeight="400"
            color="white"
          >
            About This Page
          </Heading>
          <Text
            as="p"
            textAlign="center"
            fontSize="md"
            lineHeight="1.8"
            mb={15}
            color="white"
            fontFamily="hiragino-kaku-gothic-pron, sans-serif"
          >
            このサイトを訪れてくださり、誠にありがとうございます。
            <br />
            ここは Makino のポートフォリオサイトです。
            <br />
            あなたに、私のことを知ってほしいと思って作りました。
            <br />
            どうぞごゆっくり。
          </Text>
        </Container>
      </Box>

      <Box
        position="relative"
        overflow="hidden"
        height="100px"
        width="100%"
        mt={0}
      >
        <Box
          display="flex"
          width="100%"
          animation={`${scroll} 30s linear infinite`}
        >
          <Box
            as="img"
            src="/wave.svg"
            alt="wave"
            width="100%"
            objectFit="cover"
          />
          <Box
            as="img"
            src="/wave.svg"
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
