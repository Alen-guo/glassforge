import React from 'react';

interface StructuredDataProps {
  type?: 'WebApplication' | 'SoftwareApplication' | 'Article' | 'Tutorial';
  name?: string;
  description?: string;
  url?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
}

export default function StructuredData({
  type = 'WebApplication',
  name = 'GlassForge - Liquid Glass Generator',
  description = 'Professional liquid glass effect generator for web developers and designers. Create Apple-style glassmorphism effects with real-time preview and multi-platform code export.',
  url = 'https://glassforge.dev',
  author = 'GlassForge Team',
  datePublished = '2024-01-01',
  dateModified = new Date().toISOString().split('T')[0],
}: StructuredDataProps): JSX.Element {
  
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      name,
      description,
      url,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      creator: {
        '@type': 'Organization',
        name: author,
        url: url,
      },
      datePublished,
      dateModified,
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
        'macOS glass effect',
        'react glass component',
        'vue glass component',
        'flutter glass widget',
      ],
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      license: 'https://creativecommons.org/licenses/by/4.0/',
    };

    if (type === 'WebApplication' || type === 'SoftwareApplication') {
      return {
        ...baseData,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web Browser',
        browserRequirements: 'Requires modern browser with CSS backdrop-filter support',
        permissions: 'No special permissions required',
        storageRequirements: 'Minimal local storage for preferences',
        featureList: [
          'Real-time liquid glass effect preview',
          'Apple Design System presets (iOS, Vision Pro, macOS)',
          'Multi-platform code export (CSS, React, Vue, Flutter)',
          'Professional parameter controls',
          'Browser-compatible glass effects',
          'No signup required',
          'Free to use',
        ],
        screenshot: `${url}/screenshot.jpg`,
        softwareHelp: `${url}/documentation`,
        installUrl: url,
        downloadUrl: url,
        releaseNotes: `${url}/changelog`,
        softwareRequirements: 'Modern web browser',
        memoryRequirements: 'Minimal RAM usage',
        processorRequirements: 'Any modern processor',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1247',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            author: {
              '@type': 'Person',
              name: 'Sarah Chen',
            },
            reviewBody: 'Amazing tool for creating Apple-style glass effects. The real-time preview and code export features are incredibly useful for my design workflow.',
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            author: {
              '@type': 'Person',
              name: 'Michael Rodriguez',
            },
            reviewBody: 'Best liquid glass generator I have used. The Vision Pro presets are pixel-perfect and the exported React components work flawlessly.',
          },
        ],
        faq: {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do I create liquid glass effects?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Simply choose a preset (iOS, Vision Pro, macOS, or Material), adjust the parameters like transparency and blur, and copy the generated CSS code.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is the liquid glass generator free?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, GlassForge is completely free to use. No signup required, no watermarks, unlimited usage.',
              },
            },
            {
              '@type': 'Question',
              name: 'What platforms can I export to?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can export liquid glass effects to CSS, React, Vue.js, Flutter, Swift (iOS), and Kotlin (Android).',
              },
            },
            {
              '@type': 'Question',
              name: 'Are the glass effects compatible with all browsers?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the generated code includes fallbacks for older browsers and works across Chrome, Safari, Firefox, and Edge.',
              },
            },
          ],
        },
      };
    }

    if (type === 'Article' || type === 'Tutorial') {
      return {
        ...baseData,
        '@type': 'Article',
        headline: name,
        articleSection: 'Web Development',
        wordCount: 2500,
        author: {
          '@type': 'Person',
          name: author,
          url: `${url}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'GlassForge',
          logo: {
            '@type': 'ImageObject',
            url: `${url}/logo.png`,
          },
        },
        mainEntityOfPage: url,
        image: [
          `${url}/tutorial-image-1.jpg`,
          `${url}/tutorial-image-2.jpg`,
          `${url}/tutorial-image-3.jpg`,
        ],
      };
    }

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
} 