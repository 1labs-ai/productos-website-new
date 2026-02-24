import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://productos.dev"),
  title: {
    default: "ProductOS - Ship Products 10x Faster with AI",
    template: "%s | ProductOS",
  },
  description:
    "World's first AI-native product platform. Ship products in 3-12 days with AI agents that preserve context from ideation to deployment.",
  keywords: [
    "AI product development",
    "startup MVP",
    "code generation",
    "AI agents",
    "product management",
    "rapid prototyping",
  ],
  authors: [{ name: "ProductOS", url: "https://productos.dev" }],
  creator: "1Labs AI",
  publisher: "ProductOS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://productos.dev",
    siteName: "ProductOS",
    title: "ProductOS - Ship Products 10x Faster with AI",
    description:
      "World's first AI-native product platform. Ship products in 3-12 days.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProductOS - AI-Native Product Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProductOS - Ship Products 10x Faster with AI",
    description: "World's first AI-native product platform.",
    images: ["/og-image.png"],
    creator: "@productos",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
