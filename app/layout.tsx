import './globals.css'
import CookieConsent from '../components/CookieConsent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <title>Detour — Your Next Trip, Planned in Minutes</title>
        <meta name="description" content="Plan epic road trips in minutes with smart stops, visual inspiration, and effortless editing." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}