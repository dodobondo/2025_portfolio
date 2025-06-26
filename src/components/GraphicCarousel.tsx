// /src/components/GraphicCarousel.tsx

"use client";

import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

interface ImageInfo {
  id: number;
  src: string;
  alt: string;
}

interface GraphicCarouselProps {
  images: ImageInfo[];
  direction?: "left" | "right"; 
}

const GraphicCarousel = ({ images, direction="right"}: GraphicCarouselProps) => {
  return (
    <Marquee
      speed={30} 
      direction={direction} 
    >
      {images.map((image) => (
        <Box key={image.id} mx={4} py={4}>
          <Box
            w={{ base: "200px", md: "300px" }}
            h="auto"
          >
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="contain"
              borderRadius="md"
              boxShadow="md"
            />
          </Box>
        </Box>
      ))}
    </Marquee>
  );
};

export default GraphicCarousel;
