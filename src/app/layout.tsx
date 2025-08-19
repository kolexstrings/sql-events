import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import SmoothScroll from "./components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "SQL Events Nigeria - Passion. Innovation. Technology in Events Management",
  description:
    "Leading corporate events and conference management company in Nigeria, delivering exceptional experiences through cutting-edge technology and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
