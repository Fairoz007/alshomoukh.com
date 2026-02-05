import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Chatbot } from '@/components/chatbot'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Al Shomoukh International School | Inspiring Excellence, Shaping the Future',
  description: 'A Premier International School for Holistic Education. Join our vibrant school community and give your child the best education.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
