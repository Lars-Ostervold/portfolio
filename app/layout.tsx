import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './thoughts/[slug]/sandpack';
import ChatIcon from '@mui/icons-material/Chat';

export const metadata: Metadata = {
  metadataBase: new URL('https://lars-ostervold.vercel.app'),
  title: {
    default: 'Lars Ostervold',
    template: '%s | Lars Ostervold',
  },
  description: 'Disciple and nerd.',
  openGraph: {
    title: 'Lars Ostervold',
    description: 'Disciple and nerd.',
    url: 'https://lars-ostervold.vercel.app',
    siteName: 'Lars Ostervold',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Lars Ostervold',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <div className="relative">
          <main className="flex-auto min-w-0 mt-6 pb-16 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <footer className="absolute bottom-0 w-full border-t border-gray-400 dark:border-gray-500">
            <div className="mt-1">
              <a href="mailto:ostervold.berent@gmail.com" className="self-center">
                <ChatIcon fontSize='small' className='mr-2' />
                Chat with me
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
