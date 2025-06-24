// src/theme.ts

"use client";

import { extendTheme } from "@chakra-ui/react";

// カスタムフォント
const fonts = {
  heading: "segoe-ui, sans-serif;",
  body: "segoe-ui, sans-serif;",
};

// カスタムテーマの作成（chacraの上書き）
const customTheme = extendTheme({ fonts });

export default customTheme;