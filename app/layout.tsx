import type { Metadata } from "next";
import { Space_Mono as SpaceMono } from 'next/font/google'; // Renamed to avoid conflict
import "./globals.css";

const spaceMono = SpaceMono({ weight: '400', style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "3Dportfolio",
  description: "Web Create by Yossawat Imjai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
