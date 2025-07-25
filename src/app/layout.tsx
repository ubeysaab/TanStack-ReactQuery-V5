import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import BackArrow from "../components/ui/BackArrow";
import ReactQueryProvider from "./Provider/ReactQueryProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Query Tutorial",
  description:
    "Learn how to use TanStack React Query effectively with this tutorial by Coding in Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <ReactQueryProvider>



      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <BackArrow />
          {children}
          <Toaster richColors position="top-right" />
        </body>
      </html>

    </ReactQueryProvider>
  );
}
