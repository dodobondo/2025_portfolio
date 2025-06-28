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
import type { Work } from "../types/work";

const WorksSection = () => {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const bgColor = useColorModeValue("#fcfcfc", "gray.600");
  const graphicsTitle = useColorModeValue(
    "parts_img/graphics_title.svg",
    "parts_img/graphics_title_dark.svg"
  );
  const appsTitle = useColorModeValue(
    "parts_img/apps_title.svg",
    "parts_img/apps_title_dark.svg"
  );
  // モーダルの状態管理
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 選択された制作物を管理
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleCardClick = (work: Work) => {
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
              borderColor={textColor}
              width={{ base: "30px", md: "100px" }}
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
          <Flex mb={{ base: 5, md: 10 }} justify="center">
            <Image src={appsTitle} h={{ base: "35px", md: "45px" }}></Image>
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
          <Flex mb={{ base: 8, md: 12 }} justify="center">
            <Image src={graphicsTitle} h={{ base: "35px", md: "45px" }}></Image>
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
            <Text textAlign="left" mb={8}>
              学部時代は謎解きサークルに所属し、制作した謎解きイベントのデザインも担当していました。
              <br />
              商業イベントへの出店・企業とのコラボにて、多くの人の興味・参加体験の向上を意識して制作しました。
            </Text>
            <Box width="100vw">
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
            <Text color={textColor} textAlign="left" mb={8}>
              任天堂Switchで発売された対戦ゲーム「スマブラsp」が大好きで、対戦以外の遊び方も考案して楽しんでいます。
              <br />
              考案した企画をより多くの人に遊んでいただくために、ビジュアル・紹介動画を制作し、SNSで公開しました。
            </Text>
            <Box
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
