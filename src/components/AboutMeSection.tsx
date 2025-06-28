// src/components/AboutMeSection.tsx

"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";

const AboutMeSection = () => {
  const bgColor = useColorModeValue("#fcfcfc", "gray.600");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  return (
    <Box id="about" bg={bgColor} py={20} px={4} minH="90vh">
      <Container
        maxW="7xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex align="center" mb={{ base: 12, md: 24 }} width="100%">
          {/* Line */}
          <Box
            borderBottom="1.5px solid"
            borderColor={textColor}
            width={{ base: "30px", md: "100px" }}
            mr={3}
            opacity={0.9}
          />
          {/* Heading content */}
          <Heading
            as="h2"
            size="3xl"
            textAlign="left"
            color={textColor}
            fontWeight="700"
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
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          gap={10}
          px={{ base: 4, md: 0 }}
        >
          {/* left image */}
          <Box>
            <Image
              src="profile_img_right.jpg"
              alt="profile image"
              borderRadius="lg"
              height={{ base: "200px", md: "300px" }}
              width="100%"
              objectFit="cover"
              boxShadow="lg"
            />
          </Box>
          {/* right text */}
          <VStack align="flex-start" maxW={{ base: "80%", lg: "60%" }}>
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
              size={{ base: "sm", md: "md" }}
              color={textColor}
              mt={{ base: -2, md: -1 }}
              mb={{ base: 2, md: 4 }}
              fontWeight="500"
              letterSpacing={1.0}
            >
              Toshiki Makino
            </Heading>
            <Text
              as="p"
              color={textColor}
              letterSpacing={0.5}
              fontSize={{ base: "md", md: "lg" }}
            >
              大阪公立大学院の情報学研究科に所属しています。
              <br />
              学部時代は謎解きサークルの部長を務め、謎解きの魅力をより伝えるためにデザイン方面にも取り組みました。
              研究でもデザインを扱いたいと思って行動し、他大学と共同でフォントに関する研究を開始することになりました。
              <br />
              他にも、好きなゲームと謎解きを掛け合わせた企画を考案してbot開発を行い、活動者を通じて界隈に広めるなど、とにかく自分の“好き”を形にしています。
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
