import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Azoulay | Web3 Full-Stack Engineer",
  description: "Benjamin Azoulay is a Frontend, Backend and Blockchain Developer",
  keywords:
    "Benjamin Azoulay, web3 developer, full-stack, web3, engineer, ethereum developer",
  metadataBase: new URL("https://benjaminazoulay.com"),
  openGraph: {
    title: "Benjamin Azoulay | Web3 Full-Stack Engineer",
    description:
      "Benjamin Azoulay is a Frontend, Backend and Blockchain Developer",
    url: "https://benjaminazoulay.com",
    siteName: "BenjaminAzoulay",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Benjamin Azoulay",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BenAzlay",
    title: "Benjamin Azoulay | Web3 Full-Stack Engineer",
    description:
      "Benjamin Azoulay is a Frontend, Backend and Blockchain Developer",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  creator: "Benjamin Azoulay",
  applicationName: "Benjamin Azoulay",
  generator: "Next.js",
  publisher: "Benjamin Azoulay",
  category: "Finance, Decentralized Finance, Web3",
};

export const viewport: Viewport = {
  themeColor: "#7f1d1d",
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
        {children}
      </body>
    </html>
  );
}
