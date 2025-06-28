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
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

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
          opacity={0.5}
          mt={2}
          fontFamily="segoe-ui, sans-serif"
          letterSpacing="1px"
        >
          {work.category}
        </Text>
        <Heading
          as="h3"
          fontSize="22px"
          color={textColor}
          mt={-1.5}
          mb={0}
          fontWeight="600"
        >
          {work.title}
        </Heading>
        <Text color={textColor} noOfLines={3}>
          {work.summary}
        </Text>
      </VStack>

      {/* 「詳しく見る」ボタン */}
      <Flex w="100%" justify="flex-end" mt={2}>
        <Button
          variant="outline"
          borderWidth="xs"
          borderColor={useColorModeValue("gray.600", "whiteAlpha.900")}
          color={useColorModeValue("gray.600", "whiteAlpha.900")}
          borderRadius="3xl"
          fontWeight="500"
          size="sm"
          onClick={onOpen}
          _hover={{
            // bg: "white",
            borderColor: useColorModeValue("gray.500", "whiteAlpha.800"),
            color: useColorModeValue("gray.500", "whiteAlpha.800"),
          }}
        >
          詳しく見る
        </Button>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
