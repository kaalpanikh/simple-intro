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
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23E8E8E8" rx="9"/><text x="24" y="33" text-anchor="middle" font-size="26" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '48x48',
        type: 'image/svg+xml',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="%23E8E8E8" rx="12"/><text x="32" y="44" text-anchor="middle" font-size="36" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '64x64',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" fill="%23E8E8E8" rx="36"/><text x="90" y="120" text-anchor="middle" font-size="100" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 152"><rect width="152" height="152" fill="%23E8E8E8" rx="30"/><text x="76" y="102" text-anchor="middle" font-size="84" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '152x152',
        type: 'image/svg+xml',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23E8E8E8" rx="24"/><text x="60" y="80" text-anchor="middle" font-size="66" font-weight="bold" fill="%231A1A1A">N</text></svg>',
        sizes: '120x120',
        type: 'image/svg+xml',
      }
    ],
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23E8E8E8" rx="6"/><text x="16" y="22" text-anchor="middle" font-size="18" font-weight="bold" fill="%231A1A1A">N</text></svg>',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Nikhil Mishra',
    'msapplication-TileColor': '#E8E8E8',
    'msapplication-TileImage': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect width="144" height="144" fill="%23E8E8E8" rx="28"/><text x="72" y="96" text-anchor="middle" font-size="80" font-weight="bold" fill="%231A1A1A">N</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional mobile favicon support */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23E8E8E8' rx='6'/><text x='16' y='22' text-anchor='middle' font-size='18' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        <link rel="shortcut icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23E8E8E8' rx='6'/><text x='16' y='22' text-anchor='middle' font-size='18' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        
        {/* Apple Touch Icons for iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect width='180' height='180' fill='%23E8E8E8' rx='36'/><text x='90' y='120' text-anchor='middle' font-size='100' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        <link rel="apple-touch-icon" sizes="152x152" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 152 152'><rect width='152' height='152' fill='%23E8E8E8' rx='30'/><text x='76' y='102' text-anchor='middle' font-size='84' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        <link rel="apple-touch-icon" sizes="120x120" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23E8E8E8' rx='24'/><text x='60' y='80' text-anchor='middle' font-size='66' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/svg+xml" sizes="48x48" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='48' height='48' fill='%23E8E8E8' rx='9'/><text x='24' y='33' text-anchor='middle' font-size='26' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        <link rel="icon" type="image/svg+xml" sizes="64x64" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='%23E8E8E8' rx='12'/><text x='32' y='44' text-anchor='middle' font-size='36' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        
        {/* Windows Tiles */}
        <meta name="msapplication-TileColor" content="#E8E8E8" />
        <meta name="msapplication-TileImage" content="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144 144'><rect width='144' height='144' fill='%23E8E8E8' rx='28'/><text x='72' y='96' text-anchor='middle' font-size='80' font-weight='bold' fill='%231A1A1A'>N</text></svg>" />
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nikhil Mishra" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}