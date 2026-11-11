import type { Metadata, Viewport } from 'next'
import './globals.css'

const description = 'Site reliability engineer at Schbang. I keep production fast, secure and online.'


export const metadata: Metadata = {
  metadataBase: new URL('https://simple.nikhilmishra.xyz'),
  title: {
    default: 'Nikhil Mishra',
    template: '%s | Nikhil Mishra',
  },
  description,
  openGraph: {
    title: 'Nikhil Mishra',
    description,
    url: 'https://simple.nikhilmishra.xyz',
    siteName: 'Nikhil Mishra',
    images: [{ url: '/og-v2.png', width: 1200, height: 627, alt: 'Nikhil Mishra, Site Reliability Engineer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Mishra',
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
