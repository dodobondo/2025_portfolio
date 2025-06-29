// src/components/WaveAnimation.tsx

"use client";

import { Box, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

interface WaveAnimationProps {
  imageSrc: string;
  duration?: number;
  height?: string;
  bg?: string;
}

const WaveAnimation = ({
  imageSrc,
  duration = 30,
  height = "100%",
  bg = "#fcfcfc",
}: WaveAnimationProps) => {
  const animation = `${scroll} ${duration}s linear infinite`;

  return (
    <Box
      height={height}
      width="100%"
      bg={bg}
    >
      <Flex width="200%" height="100%" animation={animation}>
        <Box as="img" src={imageSrc} alt="wave" width="50%" objectFit="cover" />
        <Box
          as="img"
          src={imageSrc}
          alt="wave-copy"
          width="50%"
          objectFit="cover"
          ml="-1px"
        />
      </Flex>
    </Box>
  );
};

export default WaveAnimation;
