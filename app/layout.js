import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explore The City — Locally-Written India Travel Guides',
  description: 'First-hand, locally-written travel guides to India\'s cities — currently Bangalore, Mumbai and Goa. Attractions, food, hidden gems, day trips, neighbourhoods and practical tips, plus long-form articles on travelling across India.',
  authors: [{ name: 'Explore The City Editorial' }],
  creator: 'Explore The City',
  publisher: 'Explore The City',
  metadataBase: new URL('https://www.explorethecity.in'),
  alternates: {
    canonical: 'https://www.explorethecity.in',
  },
  verification: {
    google: 'IZHMSq9e0p173wQb1TeEu7nYjjbB5yPn12rmIuG_-_E',
  },
  other: {
    'google-adsense-account': 'ca-pub-6525177681486877',
  },
  openGraph: {
    title: 'Explore The City — Locally-Written India Travel Guides',
    description: 'First-hand travel guides to India\'s cities (Bangalore, Mumbai and Goa) — attractions, food, hidden gems, day trips and practical tips, plus long-form India travel articles.',
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6525177681486877"
          crossorigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Explore The City',
              url: 'https://www.explorethecity.in',
              logo: 'https://www.explorethecity.in/logo.png',
              description: 'Locally-written, first-hand travel guides to India\'s cities — currently Bangalore, Mumbai and Goa — covering attractions, food, hidden gems, day trips and practical tips.',
              email: 'contact@explorethecity.in',
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
            }),
          }}
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
