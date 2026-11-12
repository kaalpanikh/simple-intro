import type { Metadata, Viewport } from 'next'
import './globals.css'

const description =
  'Nikhil Mishra (@kaalpanikh) is a DevOps and site reliability engineer at Schbang in Mumbai, keeping production websites for 40+ brands fast, secure and online. Previously DevOps at BeHooked and SRE intern at Dukaan.'


export const metadata: Metadata = {
  metadataBase: new URL('https://simple.nikhilmishra.xyz'),
  title: {
    default: 'Nikhil Mishra – DevOps & Site Reliability Engineer',
    template: '%s | Nikhil Mishra',
  },
  description,
  applicationName: 'Nikhil Mishra',
  authors: [{ name: 'Nikhil Mishra', url: 'https://simple.nikhilmishra.xyz' }],
  creator: 'Nikhil Mishra',
  keywords: [
    'Nikhil Mishra',
    'kaalpanikh',
    'Nikhil Mishra SRE',
    'Nikhil Mishra DevOps',
    'Nikhil Mishra Schbang',
    'Site Reliability Engineer Mumbai',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    title: 'Nikhil Mishra – DevOps & Site Reliability Engineer',
    description,
    url: 'https://simple.nikhilmishra.xyz',
    siteName: 'Nikhil Mishra',
    images: [{ url: '/og-v2.png', width: 1200, height: 627, alt: 'Nikhil Mishra, Site Reliability Engineer' }],
    type: 'profile',
    firstName: 'Nikhil',
    lastName: 'Mishra',
    username: 'kaalpanikh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Mishra – DevOps & Site Reliability Engineer',
    creator: '@kaalpanikhitis',
    description,
    images: ['/og-v2.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1b1a19' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
