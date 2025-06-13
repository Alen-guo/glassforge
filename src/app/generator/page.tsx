import { Metadata } from 'next';
import GeneratorClient from '@/components/glass/GeneratorClient';

// 添加结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Liquid Glass Generator",
  "applicationCategory": "DesignApplication",
  "description": "Create stunning Apple-style liquid glass effects online for free. Export CSS, React, Vue code instantly.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120"
  },
  "featureList": [
    "Real-time preview",
    "Multi-platform export",
    "Apple Design System",
    "Advanced parameters",
    "Custom animations"
  ]
};

// 添加页面元数据
export const metadata: Metadata = {
  title: 'Liquid Glass Generator Online Free - Create Apple-Style Glass Effects',
  description: 'Create stunning Apple-style liquid glass effects online for free. Export CSS, React, Vue code instantly. The most advanced liquid glass generator with real-time preview.',
  keywords: ['liquid glass', 'liquid glass generator online free', 'apple glass effect', 'liquid glass css', 'vision pro glass effect'],
  openGraph: {
    title: 'Liquid Glass Generator - Create Apple-Style Glass Effects',
    description: 'Create stunning Apple-style liquid glass effects online for free. Export CSS, React, Vue code instantly.',
    images: ['/og-image.jpg'],
    type: 'website',
    siteName: 'Liquid Glass Generator',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liquid Glass Generator - Create Apple-Style Glass Effects',
    description: 'Create stunning Apple-style liquid glass effects online for free. Export CSS, React, Vue code instantly.',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://www.liquidglass.space/generator'
  }
};

// 添加结构化数据到页面
export default function GeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeneratorClient />
    </>
  );
} 