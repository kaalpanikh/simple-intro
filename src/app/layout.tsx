import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhil Mishra',
  description: 'I\'m a developer and engineer. I work at Hooked teaching about DevOps.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23E8E8E8" rx="8"/><text x="20" y="28" text-anchor="middle" font-size="24" font-weight="bold" fill="%231A1A1A">N</text></svg>',
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