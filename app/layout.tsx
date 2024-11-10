// import localFont from 'next/font/local';
import './globals.css';
import type { Viewport, Metadata } from 'next';
import { Inter } from 'next/font/google';
/*
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
*/

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'Left Wing Clothing | Political T-Shirts | Political Clothing',
  description:
    'We gather together the best left wing t-shirts and political clothing. Stop Trump.',
  keywords: ['left wing t-shirts', 'political t-shirts', 'political clothing'],
  metadataBase: new URL('https://left-wing-clothing.com'),
  openGraph: {
    siteName:
      'Left Wing Clothing | Political T-Shirts | Political Clothing',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'Left Wing Clothing',
  appleWebApp: {
    title: 'Left Wing Clothing',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-8 gap-2 md:gap-4 inter">
          {children}
        </main>
      </body>
    </html>
  );
}