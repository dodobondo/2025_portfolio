// src/app/providers.tsx

"use client"; 

import { ChakraProvider } from "@chakra-ui/react";


import customTheme from "../theme"; // カスタムテーマをインポート

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
  );
}
