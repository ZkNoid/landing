import type { Metadata } from "next";

import "./globals.css";
import { helveticaNow, outfit, kavaimo } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zknoid.io"),
  alternates: {
    canonical: "/",
  },
  title: "ZkNoid gaming platform",
  description: "Web3 gaming platform powered by ZK",
  openGraph: {
    title: "ZkNoid gaming platform",
    description: "Web3 gaming platform powered by ZK",
    url: "https://zknoid.io",
    images: "/meta-preview.png",
    siteName: "ZkNoid gaming platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNow.variable} ${outfit.variable} ${kavaimo.variable}`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
