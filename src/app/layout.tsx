// src/app/layout.tsx

import type { Metadata } from "next";
import { Providers } from "./providers";
import { M_PLUS_Rounded_1c, Roboto_Mono, } from "next/font/google";
import TypekitLoader from "../components/TypekitLoader"; //AdobeFontsの読み込みコンポーネント

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded-1c", 
});

export const metadata: Metadata = {
  title: "牧埜 利樹 | ポートフォリオ",
  description: "牧埜利樹のポートフォリオです。制作したWebアプリやグラフィックを掲載しています。"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className="mPlusRounded1c.variable"
      suppressHydrationWarning={true}
    >
      <head>
      </head>
      <body>
        <Providers>{children}</Providers>
        <TypekitLoader />
      </body>
    </html>
  );
}
