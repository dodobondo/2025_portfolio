// src/components/AboutMeSection.tsx

"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Spacer,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

const AboutMeSection = () => {
  const bgColor = useColorModeValue("#fcfcfc", "gray.900");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  return (
    <Box id="about" bg={bgColor} py={20} px={4} height="100vh">
      <Container
        maxW="7xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex align="center" mb={24} width="100%">
          {/* Line */}
          <Box
            borderBottom="1.5px solid"
            borderColor="gray.700"
            width="100px"
            mr={3}
            opacity={0.9}
          />
          {/* Heading content */}
          <Heading
            as="h2"
            size="3xl"
            textAlign="left"
            color={textColor}
            fontFamily="oscine, sans-serif"
            fontWeight="700"
            // fontWeight="700"
          >
            <Text
              as="span" //インライン要素で改行を阻止
              color={useColorModeValue("blue.500", "blue.300")}
              mr={3}
            >
              01
            </Text>
            About Me
          </Heading>
        </Flex>

        {/* Text and image layout */}
        <Flex
          maxW="5xl"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={10}
          px={{ base: 4, md: 0 }}
        >
          {/* left image */}
          <Box textAlign={{ base: "center", md: "right" }}>
            <Image
              src="profile_img_right.jpg"
              alt="profile image"
              borderRadius="lg"
              height={{ base: "200px", md: "300px" }}
              objectFit="cover"
              boxShadow="lg"
            />
          </Box>
          {/* right text */}
          <VStack align="flex-start" maxW="60%">
            <Heading
              as="h3"
              size="lg"
              color={textColor}
              letterSpacing={3.0}
              fontWeight="500"
            >
              牧埜 利樹
            </Heading>
            <Heading
              as="h6"
              size="md"
              color={textColor}
              mt={-1}
              mb={8}
              fontWeight="500"
              letterSpacing={1.0}
            >
              Toshiki Makino
            </Heading>
            <Text as="p" fontSize="lg" color={textColor} letterSpacing={0.5}>
              大阪公立大学院で情報学を学んでいます。情報やブランドイメージを動きのある形で伝えることができるWebデザインに惹かれ、Webデザイナーを目指すことを決意。
            </Text>
            <Text as="p" fontSize="lg" color={textColor}>
              8ヶ月間スクールでWebデザインについて学び、現在は転職活動をしています。
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
