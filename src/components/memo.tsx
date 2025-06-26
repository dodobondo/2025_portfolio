"use client";

import {
  Box,
  Container,
  Text,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const bgColor = useColorModeValue("#0071bc", "gray.900");
  const textColor = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bgColor}>
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

        {/* 下部コンテンツ（左右に分ける） */}
        <Flex justify="space-between" align="center" py={5}>
          {/* 左側テキスト */}
          <Text fontSize="lg" color={textColor} opacity={0.9}>
            © {new Date().getFullYear()} Toshiki Makino. All rights reserved.
          </Text>
          {/* 右側にページトップボタン */}
          <Flex gap={6} align="center">
            <IconButton
              aria-label="Scroll to top"
              isRound
              // size="lg" プロパティを削除し、以下のプロパティでサイズを直接指定
              boxSize={{ base: "48px", md: "60px" }} // ボタン自体のサイズ（スマホとPCで変更）
              color="white"
              bg="#0071bc"
              border="1px solid white" // 枠線を少し太く
              boxShadow="md"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              icon={
                <FaArrowUp size="24px" /> // アイコン自体のサイズを指定
              }
            />
          </Flex>
        </Flex>

        {/* ページ中央にGitHubアイコン */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Link href="https://github.com/あなたのユーザー名" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              isRound
              // variant="outline"
              bg="white"
              opacity="0.9"
              size="lg"
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
