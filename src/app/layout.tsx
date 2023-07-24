import { Inter } from 'next/font/google';
import type { PropsWithChildren, ReactElement } from 'react';

import { Providers } from '@/app/redux/provider';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: PropsWithChildren): ReactElement => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
