import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  'Juliano M.  R. Alencar | Desenvolvedor de Software',
  description: 'Portfólio de Juliano M. R.  Alencar - Estudante de Ciência da Computação e Desenvolvedor de Software',
}

export default function RootLayout({
  children,
}: {
  children: React. ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}