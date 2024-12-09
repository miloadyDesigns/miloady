
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
    default: "Miloady Designs Innovative Strategies for Your Brand",
  },
  description: "Miloady Designs Expert in development, graphics, marketing & animation services. Elevate your brand with creative solutions!",
  keywords: "custom web development services, full-stack development solutions, mobile app development, e-commerce website design, software development for startups, responsive web design, web development best practices, cloud-based development services, javascript development frameworks, front-end development services, graphic design services for brands, logo design for businesses, custom illustrations for websites, branding design services, print design solutions, 3D graphic design services, visual design for marketing, digital art design, website graphics creation, corporate identity design, digital marketing strategies, social media advertising, content marketing campaigns, SEO services for businesses, email marketing automation, brand positioning strategies, paid search campaigns (PPC), influencer marketing management, marketing automation tools, online reputation management, 2D animation services, motion graphics for branding, explainer video animation, 3D animation for websites, corporate animation videos, animation for product demos, custom animated logos, animation design for marketing, interactive animations for apps, video animation services for businesses, blockchain development services, smart contract development, NFT development solutions, cryptocurrency solutions, blockchain for businesses, blockchain app development, decentralized application (DApp) development, blockchain consulting services, blockchain technology for startups, enterprise blockchain solutions"
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
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Miloady Designs" />
        <meta name="publisher" content="Miloady Designs" />
        <link
          rel="canonical"
          href="https://www.miloadydesigns.com/"
          key="canonical"
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
