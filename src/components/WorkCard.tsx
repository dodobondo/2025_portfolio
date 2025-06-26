// /src/components/WorkCard.tsx

"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";

interface WorkCardProps {
  work: any;
  onOpen: () => void;
}

const WorkCard = ({ work, onOpen }: WorkCardProps) => {
  const textColor = useColorModeValue("gray.700", "gray.400");

  return (
    <Flex direction="column" h="100%" p={6}>
      {/* 上半分 (画像とテキスト) */}
      <VStack align="start" flex="1">
        <Box
          w="100%"
          overflow="visible"
          borderRadius="lg"
          cursor="pointer"
          onClick={onOpen}
        >
          <Image
            src={work.thumbnailUrl}
            alt={`Thumbnail of ${work.title}`}
            w="100%"
            h="auto"
            borderRadius="lg"
            boxShadow="md"
            objectFit="cover"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
            }}
          />
        </Box>
        <Text
          color="blue.500"
          fontSize="sm"
          fontWeight="bold"
          opacity={0.6}
          mt={2}
          fontFamily="segoe-ui, sans-serif"
        >
          {work.category}
        </Text>
        <Heading
          as="h3"
          fontSize="22px"
          color={textColor}
          mt={-1.5}
          mb={1}
          fontWeight="700"
        >
          {work.title}
        </Heading>
        <Text color={textColor} noOfLines={2}>
          {work.summary}
        </Text>
      </VStack>

      {/* 「詳しく見る」ボタン */}
      <Flex w="100%" justify="flex-end" mt={2}>
        <Button
          variant="outline"
          borderColor="gray.600"
          color="gray.600"
          borderRadius="3xl"
          size="sm"
          onClick={onOpen}
          _hover={{
            bg: "gray.600",
            color: "white",
          }}
        >
          詳しく見る
        </Button>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
