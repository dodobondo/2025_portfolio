// src/theme.ts

"use client";

import { extendTheme } from "@chakra-ui/react";
import { body } from "framer-motion/client";

// カスタムフォント
const fonts = {
  heading: "oscine, zen-kaku-gothic-new, sans-serif",
  body: "zen-kaku-gothic-new, sans-serif",
};
// カスタムテーマの作成（chacra uiの上書き）
const customTheme = extendTheme({ fonts});

export default customTheme;