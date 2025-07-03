// /src/components/AboutPageSection.tsx

"use client";

import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import WaveAnimation from "./WaveAnimation";
const AboutPageSection = () => {
  const bgColor = useColorModeValue("#fcfcfc", "gray.600");

  return (
    <Box bg={bgColor}>
      <Box
        display="flex"
        id="about_page"
        py={10}
        px={6}
        bg="#0071bc"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
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
            fontSize={{ base: "lg", md: "xl" }}
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
        {/* ここに WaveAnimation を移動し、絶対配置を適用 */}
        <WaveAnimation
          imageSrc="/parts_img/wave_reverse.svg"
          height="5vw"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          bg={bgColor}
        />
      </Box>
    </Box>
  );
};

export default AboutPageSection;
