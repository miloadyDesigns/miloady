
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";
import ProviderChakra from "./_components/ChakraProvider/ChakraProvider";
import Scene2 from "./_components/ParticleCursors/Scene2";
import { HeaderVisibilityProvider } from "@/context/HeaderVisibilityProvider ";
import Loader from "./_components/Loader/Loader";
import MegaMenu from "./_components/Ui/MegaMenu";
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

export const metadata = {
  title: {
    template: "%s - Miloady Designs",
    default: "Miloady Designs"
  }
}
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/FonceSans.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pp.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/text.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/joinning.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/anydore.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/back.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/adrinejoin.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/head.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <HeaderVisibilityProvider>
          <ProviderChakra>
            {/* <Header /> */}
            <Scene2>
              <MegaMenu />
              {children}
            </Scene2>
          </ProviderChakra>
        </HeaderVisibilityProvider>
      </body>
    </html>

  );
}
