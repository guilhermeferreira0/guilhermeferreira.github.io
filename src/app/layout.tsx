import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ["latin"],
  weight: ['400', '500']
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: "FerreiraCodes",
  description: "Welcome to my portofolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plexMono.variable} ${jetBrains.variable}`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
