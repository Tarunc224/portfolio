declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}

import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'ML Portfolio',
  description: 'A portfolio showcasing machine learning projects with an interactive chatbot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  )
}

