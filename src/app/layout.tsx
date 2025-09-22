import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Metwoali - Senior Software Engineer',
  description: 'Building mission-critical systems with AI/ML and cloud architecture',
  openGraph: {
    title: 'Ahmed Metwoali - Senior Software Engineer',
    description: 'Building mission-critical systems with AI/ML and cloud architecture',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}