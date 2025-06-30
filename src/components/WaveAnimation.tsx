// src/components/WaveAnimation.tsx

"use client";

import { Box, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const scroll = keyframes`
  from { background-position-x: 0; }
  to { background-position-x: -1920px; }
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
      backgroundImage={`url(${imageSrc})`}
      backgroundRepeat="repeat-x"
      backgroundSize="auto 100%"
      backgroundPosition="bottom"
      animation={animation}
    />
  );
};

export default WaveAnimation;
