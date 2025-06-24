// src/components/HeroSection.tsx

"use client";

import { Box, useColorModeValue } from "@chakra-ui/react"; 
import { useState, useEffect } from "react"; 

const HeroSection = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

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
      height="100vh"
      overflow="hidden"
      // SVG画像をCSSの背景画像として設定（直接画像読み込みだとうまくいかなかった）
      backgroundImage={animatedSvgUrl ? `url('${animatedSvgUrl}')` : "none"}
      backgroundSize="cover"
      backgroundPosition="center" 
      backgroundRepeat="no-repeat" 
      backgroundColor="#92d7f3"
    >
    </Box>
  );
};

export default HeroSection;
