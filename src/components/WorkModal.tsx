// /src/components/WorkModal.tsx

"use client";

import { useState, useEffect } from "react"; // useEffectをインポート
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Text,
  useColorModeValue,
  Flex,
  Heading,
  VStack,
  HStack,
  Tag,
  Link,
  Icon,
  Box,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"; // 左右の矢印アイコンを追加
import { AiFillYoutube } from "react-icons/ai";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  work: any;
}

const WorkModal = ({ isOpen, onClose, work }: WorkModalProps) => {
  const bgColor = useColorModeValue("gray.500", "gray.900");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const titleColor = useColorModeValue("white", "whiteAlpha.900");

  // 表示する画像のインデックス（何枚目か）を管理する状態
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // モーダルが開かれたり、表示する作品が変わったら、インデックスを0にリセットする
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, work]);

  if (!work) return null;

  const hasMultipleImages = work.detailImageUrls.length > 1;

  // 画像を切り替えるための関数
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? work.detailImageUrls.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === work.detailImageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="6xl"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent mx={4} my={16} p={{ base: 4, md: 6 }} color={textColor}>
        <ModalHeader>
          <Heading as="h3" size="lg">
            {work.title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton size="lg" top={4} right={4} />
        <ModalBody>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 6, lg: 8 }}
          >
            {/*左カラム (情報) */}
            <VStack
              align="start"
              spacing={5}
              flex={{ base: "none", lg: 1.5 }}
              maxW={{ base: "100%", lg: "50%" }}
              divider={<Divider />} // 各セクションの間に区切り線を表示
            >
              {/* Description セクション */}
              <VStack align="start" spacing={2} w="100%">
                <Heading size="sm">Description</Heading>
                <Text whiteSpace="pre-wrap">{work.description}</Text>
              </VStack>

              {/* Tools セクション */}
              <VStack align="start" spacing={3} w="100%">
                <Heading size="sm">Tools</Heading>
                <HStack spacing={2} wrap="wrap">
                  {work.tools.map((tool: string) => (
                    <Tag
                      key={tool}
                      size="md"
                      px={3}
                      borderRadius="md"
                      backgroundColor={bgColor}
                      color={titleColor}
                    >
                      {tool}
                    </Tag>
                  ))}
                </HStack>
              </VStack>

              {/* Links セクション */}
              <VStack align="start" spacing={3} w="100%">
                <Heading size="sm">Links</Heading>
                <HStack spacing={4}>
                  {work.githubUrl && (
                    <Link href={work.githubUrl} isExternal>
                      <IconButton
                        aria-label="GitHub"
                        icon={<Icon as={FaGithub} boxSize={7} />}
                        isRound
                        size="lg"
                      />
                    </Link>
                  )}
                  {work.youtubeUrl && ( // データにyoutubeUrlがあれば表示
                    <Link href={work.youtubeUrl} isExternal>
                      <IconButton
                        aria-label="YouTube"
                        icon={<Icon as={AiFillYoutube} boxSize={7} />}
                        color="#FF0000"
                        isRound
                        size="lg"
                      />
                    </Link>
                  )}
                  {work.websiteUrl && ( // データにwebsiteUrlがあれば表示
                    <Link href={work.websiteUrl} isExternal>
                      <IconButton
                        aria-label="Website"
                        icon={<Icon as={FaLink} boxSize={7} />}
                        color="#FF0000"
                        isRound
                        size="lg"
                      />
                    </Link>
                  )}
                </HStack>
              </VStack>
            </VStack>

            <VStack
              flex={{ base: "none", lg: 1 }}
              w="100%"
              spacing={4}
              align="center"
            >
              {/* メイン画像とナビゲーションボタンのコンテナ */}
              <Box position="relative" w="100%">
                <Image
                  src={work.detailImageUrls[currentImageIndex]}
                  alt={`${work.title}の詳細画像 ${currentImageIndex + 1}`}
                  borderRadius="md"
                  objectFit="contain"
                  maxH={{ base: "300px", lg: "450px" }}
                  w="100%"
                />

                {/* 複数枚画像がある場合のみ、左右のボタンを表示 */}
                {hasMultipleImages && (
                  <>
                    <IconButton
                      aria-label="Previous image"
                      icon={<FaChevronLeft />}
                      onClick={goToPrevious}
                      position="absolute"
                      left={2}
                      top="50%"
                      transform="translateY(-50%)"
                      isRound
                      bg="blackAlpha.600"
                      _hover={{ bg: "blackAlpha.800" }}
                      color="white"
                    />
                    <IconButton
                      aria-label="Next image"
                      icon={<FaChevronRight />}
                      onClick={goToNext}
                      position="absolute"
                      right={2}
                      top="50%"
                      transform="translateY(-50%)"
                      isRound
                      bg="blackAlpha.600"
                      _hover={{ bg: "blackAlpha.800" }}
                      color="white"
                    />
                  </>
                )}
              </Box>

              {/* 複数枚画像がある場合のみ、サムネイルを表示 */}
              {hasMultipleImages && (
                <HStack spacing={3} justify="center" wrap="wrap">
                  {work.detailImageUrls.map((src: string, index: number) => (
                    <Box
                      key={index}
                      boxSize="60px"
                      border="2px solid"
                      borderColor={
                        currentImageIndex === index ? "blue.400" : "transparent"
                      }
                      borderRadius="md"
                      cursor="pointer"
                      onClick={() => setCurrentImageIndex(index)}
                      p="2px"
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="sm"
                      />
                    </Box>
                  ))}
                </HStack>
              )}
            </VStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default WorkModal;
