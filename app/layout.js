import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Muhammad Noman | Frontend Developer, AI Enthusiast, Video & Photo Editor, Graphic Designer",
  description:
    "Experienced Frontend Developer skilled in React.js, Next.js, AI-based applications, video editing, photo editing, UI/UX, and graphic design. Explore my portfolio for cutting-edge projects and creative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7225725941807740"
        crossOrigin="anonymous"
      ></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
