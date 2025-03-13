import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './components/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
