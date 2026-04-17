import './globals.css'
import { Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import ClientWrapper from './components/ClientWrapper'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <ScrollToTop />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
