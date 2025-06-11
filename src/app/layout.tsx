import type { Metadata } from 'next';
import '@/styles/globals.css';
import StructuredData from '@/components/layout/StructuredData';

export const metadata: Metadata = {
  title: 'Liquid Glass Generator Online Free - GlassForge | Apple Style Glass Effects',
  description: 'Create stunning liquid glass effects with our professional online generator. Export Apple-style glassmorphism to CSS, React, Vue, Flutter. Free liquid glass generator trusted by 50K+ developers worldwide.',
  keywords: [
    'liquid glass',
    'glass effect generator',
    'liquid glass generator online free', 
    'apple liquid glass effect css',
    'glassmorphism',
    'backdrop filter',
    'CSS glass effect',
    'vision pro glass effect',
    'iOS glass effect',
    'macOS glass effect'
  ],
  authors: [{ name: 'GlassForge Team' }],
  creator: 'GlassForge',
  publisher: 'GlassForge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://glassforge.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GlassForge - Professional Liquid Glass Effect Generator',
    description: 'Create stunning Apple-style liquid glass effects with our advanced online generator. Export to CSS, React, Vue, Flutter and more.',
    url: 'https://glassforge.dev',
    siteName: 'GlassForge',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GlassForge Liquid Glass Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlassForge - Liquid Glass Effect Generator',
    description: 'Create stunning Apple-style liquid glass effects online for free',
    images: ['/twitter-image.jpg'],
    creator: '@glassforge',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        
        {/* Enhanced Structured Data for SEO */}
        <StructuredData />
      </head>
      <body className="h-full antialiased apple-font">
        {/* 全屏容器 */}
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {children}
        </div>
        
        {/* Web Vitals tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic Web Vitals tracking
              if ('performance' in window && 'PerformanceObserver' in window) {
                // Track Core Web Vitals
                new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    console.log('Web Vital:', entry.name, entry.value);
                    // Here you would send to your analytics service
                  }
                }).observe({entryTypes: ['measure', 'navigation', 'paint']});
              }
            `,
          }}
        />
      </body>
    </html>
  );
} 