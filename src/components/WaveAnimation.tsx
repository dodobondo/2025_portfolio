// src/components/WaveAnimation.tsx

"use client";

import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { BoxProps } from "@chakra-ui/react"; 

const scroll = keyframes`
  from { background-position-x: -1920px; }
  to { background-position-x: 0px; }
`;

interface WaveAnimationProps {
  imageSrc: string;
  duration?: number;
  height?: string;
  bg?: string;
  position?: BoxProps["position"];
  top?: BoxProps["top"];
  bottom?: BoxProps["bottom"];
  left?: BoxProps["left"];
  right?: BoxProps["right"];
}

const WaveAnimation = ({
  imageSrc,
  duration = 150,
  height = "100%",
  bg = "#0071bc",
  position,
  top,
  bottom,
  left,
  right,
}: WaveAnimationProps) => {
  const animation = `${scroll} ${duration}s linear infinite`;

  return (
    <Box
      overflow="hidden"
      height={height}
      width="100%"
      bg={bg}
      backgroundImage={`url(${imageSrc})`}
      backgroundRepeat="repeat-x"
      backgroundSize="auto 100%"
      backgroundPosition="bottom"
      animation={animation}
      position={position}
      {...(top !== undefined ? { top } : {})}
      {...(bottom !== undefined ? { bottom } : {})}
      {...(left !== undefined ? { left } : {})}
      {...(right !== undefined ? { right } : {})}
      bottom={bottom}
      left={left}
      right={right}
    />
  );
};

export default WaveAnimation;
