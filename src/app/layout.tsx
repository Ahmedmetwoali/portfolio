// app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Metwoali - Senior Software Engineer',
  description: 'Full-stack engineer with 5+ years building scalable, production-grade applications. Currently focused on AI/ML systems — developing multiagent platforms using LangGraph, RAG, and LLM APIs.',
  openGraph: {
    title: 'Ahmed Metwoali - Senior Software Engineer',
    description: 'Full-stack engineer with 5+ years building scalable, production-grade applications. Creator of Sphinque and Rosetta Rx.',
    images: ['/og.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} bg-black antialiased overflow-x-hidden`}>
        <div className="max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}