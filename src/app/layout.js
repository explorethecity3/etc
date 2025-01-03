import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Explore The City",
  description: "Explore The City: Your Gateway to Urban Adventures. Uncover the charm and vibrancy of cities around the globe with Explore The City. From bustling streets to hidden alleyways, iconic landmarks to local secrets, we bring you inspiring stories and practical guides to make your travel experiences unforgettable.",
  keywords: "Explore the City, Urban travel guides, City travel blog, City exploration tips, Top city attractions, Best places to visit in, Hidden gems in, Travel tips for urban explorers, Iconic landmarks and local secrets, Insider city travel recommendations, How to explore cities like a local, Best travel guides for urban adventures, Top city travel destinations for 2025, Hidden spots to discover in, Planning a perfect city getaway"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
