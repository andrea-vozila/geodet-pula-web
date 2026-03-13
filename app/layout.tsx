import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Geodet d.o.o. | Geodetske usluge za Pulu, Istru i okolicu',
  description:
    'Legalizirajte objekte, sredite papire za parcelu i riješite međe. Preko 30 godina iskustva u geodetsko-katastarskim poslovima u Istri.',
}

export const viewport: Viewport = {
  themeColor: '#1D4ED8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="font-sans antialiased w-full overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
