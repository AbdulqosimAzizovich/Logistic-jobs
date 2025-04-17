import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "../components/theme-provider";
// import LoadingProvider from "@/components/loading-provider"
import AOSProvider from "@/components/aos-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TruckConnect | Logistics Job Portal",
  description: "Find the best trucking and logistics jobs across the country",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Removed LoadingProvider */}
          <AOSProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
