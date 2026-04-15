import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import Cart from '@/components/Cart';
import Providers from '@/components/Providers';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Audiophile - Premium Audio Products',
  description: 'Experience the best sound quality with Audiophile.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased`}
      >
        <Providers>
          <Cart />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
