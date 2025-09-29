import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhil Mishra',
  description: 'I\'m a developer and engineer. I work at Hooked teaching about DevOps.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23E8E8E8" rx="6"/><text x="16" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="%23E8E8E8" rx="3"/><text x="8" y="12" text-anchor="middle" font-size="10" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '16x16',
        type: 'image/svg+xml',
      }
    ],
    apple: {
      url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" fill="%23E8E8E8" rx="36"/><text x="90" y="120" text-anchor="middle" font-size="100" font-weight="bold" fill="%231A1A1A">N</text></svg>',
      sizes: '180x180',
      type: 'image/svg+xml',
    },
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23E8E8E8" rx="6"/><text x="16" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="%231A1A1A">N</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}