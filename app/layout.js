import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdSenseLoader from '@/components/AdSenseLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explore The City — Locally-Written India Travel Guides',
  description: 'Independently researched travel guides to 20 Indian destinations. Attractions, food, hidden gems, day trips, neighbourhoods and practical planning advice.',
  authors: [{ name: 'Explore The City Editorial' }],
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
    title: 'Explore The City — Locally-Written India Travel Guides',
    description: 'Independent guides to 20 Indian destinations — attractions, food, hidden gems, day trips, budgets and practical travel advice.',
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Explore The City',
              url: 'https://www.explorethecity.in',
              logo: 'https://www.explorethecity.in/logo.png',
              description: 'Independently researched guides to 20 Indian destinations, covering attractions, food, hidden gems, day trips, budgets and practical tips.',
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
        <AdSenseLoader />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
