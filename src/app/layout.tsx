import type { Metadata, Viewport } from 'next'
import './globals.css'

const description = 'Site reliability engineer at Schbang. I keep production fast, secure and online.'

const icon =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23282828" rx="6"/><text x="16" y="22" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="%23ffffff">N</text></svg>'

export const metadata: Metadata = {
  metadataBase: new URL('https://simple.nikhilmishra.xyz'),
  title: {
    default: 'Nikhil Mishra',
    template: '%s | Nikhil Mishra',
  },
  description,
  icons: { icon, shortcut: icon, apple: icon },
  openGraph: {
    title: 'Nikhil Mishra',
    description,
    url: 'https://simple.nikhilmishra.xyz',
    siteName: 'Nikhil Mishra',
    images: [{ url: '/og.png', width: 1200, height: 627, alt: 'Nikhil Mishra, Site Reliability Engineer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Mishra',
    description,
    images: ['/og.png'],
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
