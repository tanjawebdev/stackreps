import './styles/bootstrap.scss'
import './styles/global.scss'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Logo from './components/logo'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Stackreps: Mit AI zum Lernerfolg',
    template: '%s | Mit AI zum Lernerfolg',
  },
  description: 'Karteikarten, Tests und der optimale Lernplan angepasst auf deine Prüfung.',
  openGraph: {
    title: 'Stackreps',
    description: 'Mit AI zum Lernerfolg',
    url: baseUrl,
    siteName: 'Stackreps',
    locale: 'de_AT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  }
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <header>
          <div className="header-blur"></div>
          <Logo />
          <Navbar />
        </header>
        <main>
          <div className="grain"></div>
          {children}
          <Analytics/>
          <SpeedInsights/>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
