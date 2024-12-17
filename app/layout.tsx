import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import {Luxurious_Roman, Roboto_Condensed} from "next/font/google"
import { Lato } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
})
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
  title: "..:: Edirne Merkez SYD Vakfı ::..",
  description: "Edirne Sosyal Yardımlaşma ve Dayanışma Vakfı resmi web sitesi. Sosyal yardım başvuruları, faaliyetler ve iletişim bilgileri hakkında detaylı bilgi edinin.",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoCondensed.variable}${luxuriousRoman.className} ${lato.className} ${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/map.svg')] bg-contain min-h-screen flex flex-col `}
      >
        <div className="w-full sticky top-0 z-50">
          <Navbar/>
        </div>
        <div className="w-full sm:w-[75%] mx-auto pt-1 rounded-lg">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
