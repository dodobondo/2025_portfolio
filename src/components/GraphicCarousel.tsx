// /src/components/GraphicCarousel.tsx

"use client";

import {
  Box,
  VStack,
  IconButton,
  Image,
  Link,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { AiFillYoutube } from "react-icons/ai";

interface ImageInfo {
  id: number;
  src: string;
  alt: string;
}

interface ImageInfo {
  id: number;
  src: string;
  alt: string;
  link?: string;
  youtubeUrl?: string;
}

interface GraphicCarouselProps {
  images: ImageInfo[];
  direction?: "left" | "right";
}

const GraphicCarousel = ({
  images,
  direction = "right",
}: GraphicCarouselProps) => {
  return (
    <Marquee className="custom-marquee" speed={30} direction={direction}>
      {images.map((image) => {
        // カードの見た目部分を定義
        const cardContent = (
          <Box
            w={{ base: "200px", md: "300px" }}
            h="auto"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            // linkプロパティが存在する場合のみ、ホバーエフェクトを適用
            _hover={
              image.link
                ? {
                    transform: "translateY(-8px)",
                    boxShadow: "sm",
                  }
                : {}
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="contain"
              borderRadius="md"
              boxShadow="md"
            />
          </Box>
        );

        // ★ linkプロパティが存在する場合のみ、ChakraのLinkコンポーネントでラップする
        return (
          <Box
            key={image.id}
            mx={4}
            py={4}
            display="flex"
            alignItems="flex-start"
          >
            <VStack>
              {image.link ? (
                <>
                  <Link
                    href={image.link}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    {cardContent}
                  </Link>
                  <Text
                    mt={2}
                    letterSpacing={1.5}
                  >
                    Touch Me!
                  </Text>
                </>
              ) : (
                cardContent
              )}
            </VStack>
          </Box>
        );
      })}
    </Marquee>
  );
};

export default GraphicCarousel;
