import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = localFont({
  src: "./fonts/Roboto-Bold.woff",
  variable: "--font-roboto",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Edirne SYDV",
  description: "Edirne Valiliği Sosyal Yardımlaşma ve Dayanışma Vakfı Başkanlığı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/map.png')] bg-contain`}
      >
        <Navbar/>
          {children}
      </body>
    </html>
  );
}
