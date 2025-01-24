import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cat the Cat",
  description: "I'm a cat with a smol community",
  keywords: ["Cat the Cat", "Long Cat", "Solana", "Memecoin", "Crypto", "Meme"],
  authors: [{ name: "Cat the Cat Team", url: "https://catthecat.com" }],
  openGraph: {
    title: "Cat the Cat",
    description: "I'm a cat with a smol community",
    url: "https://catthecat.com",
    siteName: "Cat the Cat",
    images: [
      {
        url: "https://catthecat.com/public/img/cat.png",
        width: 1200,
        height: 630,
        alt: "Cat the Cat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat the Cat - The Longest Cat on Solana",
    description: "Explore the viral memecoin and join the community on Solana.",
    images: ["https://catthecat.com/public/img/banner.png"],
    creator: "@itscatthecat",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
