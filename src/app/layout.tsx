import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paul Madut - Full-Stack Software Engineer",
  description: "Full-Stack Software Engineer specializing in scalable fintech and trading applications. Building sleek, modern web solutions with React, Node.js, Python, and more.",
  keywords: ["Full-Stack Developer", "Software Engineer", "Fintech", "Trading Applications", "React", "Node.js", "Python", "Django"],
  authors: [{ name: "Paul Madut" }],
  creator: "Paul Madut",
  openGraph: {
    title: "Paul Madut - Full-Stack Software Engineer",
    description: "Building sleek, scalable applications for modern finance",
    url: "https://paulmadut.com",
    siteName: "Paul Madut Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Madut - Full-Stack Software Engineer",
    description: "Building sleek, scalable applications for modern finance",
    creator: "@paulmadut",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
