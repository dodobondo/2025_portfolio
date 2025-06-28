// src/app/providers.tsx

"use client"; 

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";


import customTheme from "../theme"; // カスタムテーマをインポート

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </>
  );
}
