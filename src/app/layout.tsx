import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "@/components/header";

import "./globals.css";
import { HEADER } from "./constants/HEADER";

const { LOGO } = HEADER;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Rathore",
  description: "Welcome to my personal portfolio website showcasing my projects and skills",
  keywords: ["portfolio", "developer", "projects", "skills"],
  authors: [{ name: "Rohit Rathore" }],
  creator: "Rohit Rathore",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rohit Rathore",
    description: "Welcome to my personal portfolio website showcasing my projects and skills",
    siteName: "Rohit Rathore",
  },
  twitter: {
    title: "Rohit Rathore",
    description: "Welcome to my personal portfolio website showcasing my projects and skills",
  },
  icons: {
    icon: LOGO,
    shortcut: LOGO,
    apple: LOGO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LOGO} sizes="any" />
        <link rel="apple-touch-icon" href={LOGO} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
