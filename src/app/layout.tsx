import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { site } from "@/config/site";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import InfoCard from "@/components/InfoCard";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: site.metadata.title,
  description: site.metadata.description,
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.description,
    url: site.siteUrl,
    type: "website",
    siteName: site.siteName,
    
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <InfoCard />
          {children}
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
