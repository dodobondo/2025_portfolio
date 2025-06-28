// src/theme.ts

"use client";

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { body } from "framer-motion/client";

// カスタムフォント
const fonts = {
  heading: "oscine, zen-kaku-gothic-new, sans-serif",
  body: "zen-kaku-gothic-new, sans-serif",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true, // システムの設定を使う
};

// カスタムテーマの作成（chacra uiの上書き）
const customTheme = extendTheme({ fonts, config});

export default customTheme;