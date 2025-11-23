import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explore The City - Discover Amazing Cities Across India',
  description: 'Your ultimate guide to exploring cities in India. Discover hidden gems, local food, travel tips, and authentic experiences.',
  keywords: 'travel, india, cities, tourism, travel guide, explore india, city guide',
  authors: [{ name: 'Explore The City' }],
  creator: 'Explore The City',
  publisher: 'Explore The City',
  metadataBase: new URL('https://www.explorethecity.in'),
  verification: {
    google: 'IZHMSq9e0p173wQb1TeEu7nYjjbB5yPn12rmIuG_-_E',
  },
  other: {
    'google-adsense-account': 'ca-pub-6525177681486877',
  },
  openGraph: {
    title: 'Explore The City - Discover Amazing Cities Across India',
    description: 'Your ultimate guide to exploring cities in India',
    url: 'https://www.explorethecity.in',
    siteName: 'Explore The City',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZTCV09D973"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZTCV09D973');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6525177681486877"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
