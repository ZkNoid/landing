import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";

const rockswellStd = localFont({ 
  src: './fonts/RockwellStd.otf', 
  variable: '--rockwell-std', 
  display: 'swap', 
  // declarations: [{prop: 'descent-override', value: '50%'}]
})

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ['latin'],
  variable: '--plex-mono',
  display: 'swap',
});

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
      <body className={`${rockswellStd.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
