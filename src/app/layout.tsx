import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, JetBrains_Mono, Saira } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SectionForm } from "@/components/section-form";
import { BackTop } from "@/components/back-top";

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

const saira = Saira({
  subsets: ["latin"],
  variable: '--font-saira'
});

export const metadata: Metadata = {
  title: {
    default: 'FerreiraCodes',
    template: '%s | FCodes'
  },
  description: "Welcome to my portfolio page",
  icons: [
    {
      url: '/favicon.svg'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${plexMono.variable} ${jetBrains.variable} ${saira.variable}`}
      >
        <Header />
        {children}
        <SectionForm />
        <BackTop />
      </body>
    </html>
  );
}
