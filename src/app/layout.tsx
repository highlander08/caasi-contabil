import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caasi Contábil - Soluções Contábeis Inteligentes',
  description: 'Contabilidade digital, ágil e 100% focada em resultados. Transforme sua gestão financeira com a Caasi Contábil.',
  keywords: 'contabilidade, contábil, empresa, MEI, abertura empresa, consultoria tributária, BPO financeiro, folha pagamento',
  authors: [{ name: 'Caasi Contábil' }],
  creator: 'Caasi Contábil',
  publisher: 'Caasi Contábil',
  openGraph: {
    title: 'Caasi Contábil - Soluções Contábeis Inteligentes',
    description: 'Contabilidade digital, ágil e 100% focada em resultados para sua empresa crescer com segurança.',
    url: 'https://www.caasicontabil.com.br',
    siteName: 'Caasi Contábil',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caasi Contábil - Soluções Contábeis Inteligentes',
    description: 'Contabilidade digital, ágil e 100% focada em resultados para sua empresa crescer com segurança.',
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
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="msapplication-TileColor" content="#22c55e" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}