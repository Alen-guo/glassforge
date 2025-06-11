/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 已默认支持App Router，移除过时的实验性配置
  
  // 图片优化配置
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // 压缩配置
  compress: true,
  
  // PoweredByHeader 移除Next.js标识
  poweredByHeader: false,
  
  // 严格模式
  reactStrictMode: true,
  
  // SWC minify
  swcMinify: true,
  
  // 静态导出配置（用于性能优化）
  env: {
    CUSTOM_KEY: 'glassforge',
  },
  
  // Webpack配置优化
  webpack: (config, { isServer }) => {
    // Three.js 优化
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });
    
    return config;
  },
};

module.exports = nextConfig; 