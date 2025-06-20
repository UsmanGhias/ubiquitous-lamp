import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Usman Ghias - Full Stack Developer & Odoo Technical Expert',
    template: '%s | Usman Ghias Portfolio'
  },
  description: 'Passionate Full Stack Developer, Odoo Technical Expert & Data Scientist from PUCIT. Specializing in MERN Stack, Python, and cutting-edge web technologies with 80+ successful projects.',
  keywords: [
    'Usman Ghias',
    'Full Stack Developer',
    'Odoo Developer',
    'MERN Stack',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'Data Scientist',
    'Web Development',
    'Software Engineer',
    'PUCIT',
    'Pakistan Developer'
  ],
  authors: [{ name: 'Usman Ghias', url: 'https://usmanghias.dev' }],
  creator: 'Usman Ghias',
  publisher: 'Usman Ghias',
  metadataBase: new URL('https://usmanghias.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usmanghias.dev',
    title: 'Usman Ghias - Full Stack Developer & Odoo Technical Expert',
    description: 'Passionate Full Stack Developer, Odoo Technical Expert & Data Scientist from PUCIT. Specializing in MERN Stack, Python, and cutting-edge web technologies with 80+ successful projects.',
    siteName: 'Usman Ghias Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Usman Ghias - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usman Ghias - Full Stack Developer & Odoo Technical Expert',
    description: 'Passionate Full Stack Developer, Odoo Technical Expert & Data Scientist from PUCIT.',
    images: ['/images/og-image.jpg'],
    creator: '@usmanghias',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#b5976e" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
} 