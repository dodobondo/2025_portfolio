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

import BlogTags from "./BlogTags";
import BlogAuthor from "./BlogAuthor";

const ProjectsList = () => {
  return (
    <Container id="works" maxW={"7xl"} p="100" >
      <Heading as="h1" textAlign="center" mb={10} fontSize={{ base: "3xl", md: "6xl" }}>
        Works
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        mb={10}
        color="white"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1596558450268-ecc039f37597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // プロジェクトの画像に置き換える
                }
                alt="プロジェクトイメージ"
                objectFit="cover"
                width="100%"
                height="300px" // 画像の高さを固定
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["React", "Next.js", "Chakra UI"]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              プロジェクトタイトル例
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            このプロジェクトは、[プロジェクトの簡単な説明]
            を目的として開発されました。使用技術は [技術スタック] です。
            詳細については、GitHubリポジトリやデモをご覧ください。
          </Text>
          <BlogAuthor
            name="あなたの名前"
            date={new Date("2023-01-15T10:00:00Z")}
          />
        </Box>
      </Box>

      <Heading as="h2" marginTop="5" textAlign="center">
        その他のプロジェクト
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5" justify="center">
        {/* 一旦はプロジェクトアイテムの繰り返し */}
        {[...Array(3)].map((_, index) => (
          <WrapItem
            key={index}
            width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
          >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://images.unsplash.com/photo-1507238691740-adfd8123cb60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // プロジェクトの画像に置き換える
                    }
                    alt="その他のプロジェクトイメージ"
                    objectFit="cover"
                    width="100%"
                    height="200px" // 画像の高さを固定
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              </Box>
              <BlogTags tags={["JavaScript", "HTML", "CSS"]} marginTop={3} />
              <Heading fontSize="xl" marginTop="2">
                <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                  小規模プロジェクト {index + 1}
                </Text>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                これは小規模なプロジェクトの簡単な説明です。使用技術や達成したことについて記述します。
              </Text>
              <BlogAuthor
                name="あなたの名前"
                date={new Date("2022-11-20T10:00:00Z")}
              />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

export default ProjectsList;
