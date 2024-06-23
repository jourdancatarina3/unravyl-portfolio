import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unravyl | Software Solutions",
  description: "Unravyl is a team of experienced software developers crafting bespoke websites and applications. We turn your digital vision into reality.",
  keywords: ["software development", "web development", "custom applications", "Unravyl"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          as="style"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}