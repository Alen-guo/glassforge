import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Navbar />
      
      <div 
        className="min-h-screen pt-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/images/banner2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          
          {/* 404标题 */}
          <div className="glass-card p-12 mb-8">
            <h1 className="text-8xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. The liquid glass effect might have distorted the path!
            </p>
            
            {/* 返回按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="glass-button px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Back to Home
              </Link>
              
              <Link
                href="/generator"
                className="glass-button-secondary px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Try Generator
              </Link>
            </div>
          </div>
          
          {/* 建议链接 */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-lg mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <Link href="/generator" className="text-blue-300 hover:text-blue-200 transition-colors">
                Liquid Glass Generator
              </Link>
              <Link href="/examples" className="text-blue-300 hover:text-blue-200 transition-colors">
                Examples Gallery
              </Link>
              <Link href="/docs" className="text-blue-300 hover:text-blue-200 transition-colors">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 