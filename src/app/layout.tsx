import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ClientWrapper from './components/ClientWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'Hanif Mohammad - Entry Level Software Engineer Portfolio',
  description: 'Professional portfolio showcasing decades of software engineering excellence, leadership, and innovation.',
  keywords: ['Software Engineer', 'Tech Lead', 'Full Stack Developer', 'Engineering Manager', 'Cloud Architecture'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
