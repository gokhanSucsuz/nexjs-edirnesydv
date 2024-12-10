import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import {Luxurious_Roman} from "next/font/google"
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
})
const luxuriousRoman = Luxurious_Roman({
  weight: '400',
  subsets: ['latin'],
})

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



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${luxuriousRoman.className} ${lato.className} ${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/map.svg')] bg-contain min-h-screen flex flex-col`}
      >
        <Navbar/>
        {children}
          <Footer />
      </body>
    </html>
  );
}
