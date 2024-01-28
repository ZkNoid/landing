import type { Metadata } from "next";

import "./globals.css";
import { plexMono, rockswellStd } from "./fonts";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "ZkNoid project",
  description: "Web3 gaming platform powered by ZK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rockswellStd.variable} ${plexMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
