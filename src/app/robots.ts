import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://glassforge.dev';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/admin/',
                '/_next/',
                '/private/',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
} 