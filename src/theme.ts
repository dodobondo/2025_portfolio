// src/theme.ts

"use client";

import { extendTheme } from "@chakra-ui/react";
import { body } from "framer-motion/client";

// カスタムフォント
const fonts = {
  // heading: "segoe-ui, hiragino-kaku-gothic-pron, sans-serif;",
  heading: "oscine, zen-kaku-gothic-new, sans-serif",
  // heading: "m-plus-rounded-2c, sans-serif",
  
  // body: "segoe-ui, hiragino-kaku-gothic-pron, sans-serif;",
  // body: "oscine, fot-cezanne-pron, sans-serif",
  // body: "m-plus-rounded-2c, sans-serif",
  body: "zen-kaku-gothic-new, sans-serif",
  // body: "segoe-ui, dnp-shuei-mgothic-std, sans-serif",
};
// カスタムテーマの作成（chacra uiの上書き）
const customTheme = extendTheme({ fonts});

export default customTheme;