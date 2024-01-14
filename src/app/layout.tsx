import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const roboto = Roboto({ 
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
 });

export const metadata: Metadata = {
  title: 'Travel | Seu próximo destino a um clique de distância',
  description: 'Reserve voos e hospedagens de forma simples e prática',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
