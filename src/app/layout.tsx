import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Tide Application',
  description: 'A list of jobs for all careers!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='py-4 px-6 container mx-auto'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
