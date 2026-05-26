import "../styles/globals.css";

import { type Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "Excellent Beauty Salon & Hair - Excellence in Every Detail",
  description: "Sophisticated radiance and excellence in every detail since 2015.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        <main className="pt-28 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
