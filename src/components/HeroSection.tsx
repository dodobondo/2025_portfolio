// src/components/HeroSection.tsx

"use client";

import { Box} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const HeroSection = () => {

  const [animatedSvgUrl, setAnimatedSvgUrl] = useState("");

  useEffect(() => {
    // コンポーネントがマウントされるたび（ページロード時）にURLを更新
    // Date.now()をクエリパラメータとして追加することで、毎回異なるURLになる
    setAnimatedSvgUrl(`/portfolio_hero_animated_no.svg?t=${Date.now()}`);
  }, []);

  return (
    <Box
      id="hero"
      position="relative"
      width="100%"
      aspectRatio={{ base: 16 / 9, md: 16 / 8 }}
      bg="#92d7f3"
    >
      <Box
        height="100%"
        overflow="hidden"
        py={100}
        backgroundImage={animatedSvgUrl ? `url('${animatedSvgUrl}')` : "none"}
        backgroundSize="cover"
        backgroundPosition={{ base: "center bottom", md: "center bottom" }}
        backgroundRepeat="no-repeat"
        backgroundColor="#92d7f3"
      ></Box>
    </Box>
  );
};

export default HeroSection;
