'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michelle Santiago',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}
