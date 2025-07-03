// src/components/WaveAnimation.tsx

"use client";

import { Box } from "@chakra-ui/react";
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
  position?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const WaveAnimation = ({
  imageSrc,
  duration = 30,
  height = "100%",
  bg = "#0071bc",
  position,
  bottom,
  left,
  right,
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
      position={position}
      bottom={bottom}
      left={left}
      right={right}
    />
  );
};

export default WaveAnimation;
