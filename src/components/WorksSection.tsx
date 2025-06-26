// /src/components/WorksSection.tsx

"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  VStack,
  Flex,
  Container,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";

import { works, graphicsClub, graphicsHobby } from "@/data/works";
import WorkCard from "./WorkCard";
import WorkModal from "./WorkModal";
import GraphicCarousel from "./GraphicCarousel"; 

const WorksSection = () => {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const bgColor = useColorModeValue("#fcfcfc", "gray.900");
  // モーダルの状態管理
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 選択された制作物を管理
  const [selectedWork, setSelectedWork] = useState(null);

  const handleCardClick = (work: any) => {
    setSelectedWork(work);
    onOpen();
  };

  return (
    <>
      <Box id="works" bg={bgColor} py={20} px={4}>
        <Container maxW={"7xl"}>
          <Flex align="center" mb={16} width="100%">
            <Box
              borderBottom="1.5px solid"
              borderColor="gray.700"
              width="100px"
              mr={3}
            />
            <Heading
              as="h2"
              size="3xl"
              textAlign="left"
              color={textColor}
              fontFamily="oscine, sans-serif"
              fontWeight="700"
            >
              <Text
                as="span"
                color={useColorModeValue("blue.500", "blue.300")}
                mr={4}
              >
                02
              </Text>
              Works
            </Heading>
          </Flex>
          <Flex mb={12} justify="center">
            <Image src="parts_img/apps_title.svg" h="50px"></Image>
          </Flex>
          {/* 制作物（Apps）*/}
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacingX={20}
            spacingY={2}
            maxW="5xl"
            mx="auto"
            mb={28}
          >
            {works.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                onOpen={() => handleCardClick(work)}
              />
            ))}
          </SimpleGrid>

          {/* 制作物（Graphics） */}
          <Flex mb={16} justify="center">
            <Image src="parts_img/graphics_title.svg" h="50px"></Image>
          </Flex>
          {/* Club Activityセクション */}
          <VStack align="center" mb={20} color={textColor}>
            {/* 装飾 */}
            <Text fontSize="2xl" fontWeight="800" letterSpacing={2}>
              01
            </Text>
            <Heading as="h3" size="xl" mt={-2} mb={2}>
              Club Activity
            </Heading>
            <Text textAlign="center" mb={8}>
              ここにテキストが入る。ここにテキストが入る。本当のテキストはもっと長い。
              <br />
              ここにさらにテキストが入る。テキストはもっともっと長い。
              <br />
              ここにさらにさらにテキストが入る。本当のテキストはもっともっと長い。
            </Text>
            <Box
              width="100vw"
            >
              <GraphicCarousel images={graphicsClub} />
            </Box>
          </VStack>

          {/* Hobbyセクション */}
          <VStack align="center">
            {/* 装飾 */}
            <Text fontSize="2xl" fontWeight="800" letterSpacing={2}>
              02
            </Text>
            <Heading as="h3" size="xl" mt={-2} mb={2}>
              Game Hobby
            </Heading>
            <Text color={textColor} textAlign="center" mb={8}>
              ここにテキストが入る。ここにテキストが入る。本当のテキストはもっと長い。
              <br />
              ここにさらにテキストが入る。テキストはもっともっと長い。
              <br />
              ここにさらにさらにテキストが入る。本当のテキストはもっともっと長い。
            </Text>
            <Box
              // position="absolute"
              // left="50%"
              // transform="translateX(-50%)"
              width="100vw" //親要素が画面幅を制限していても上書きできる
              mb={10}
            >
              <GraphicCarousel images={graphicsHobby} direction="left" />
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* モーダルコンポーネント */}
      <WorkModal isOpen={isOpen} onClose={onClose} work={selectedWork} />
    </>
  );
};

export default WorksSection;
