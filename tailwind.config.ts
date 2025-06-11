import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // 液态玻璃效果专用颜色系统
            colors: {
                // 玻璃效果专用透明色
                glass: {
                    white: 'rgba(255, 255, 255, 0.1)',
                    border: 'rgba(255, 255, 255, 0.2)',
                    shadow: 'rgba(0, 0, 0, 0.1)',
                },
                // 苹果官方色彩
                apple: {
                    blue: '#007AFF',
                    purple: '#5856D6',
                    pink: '#FF2D92',
                    red: '#FF3B30',
                    orange: '#FF9500',
                    yellow: '#FFCC00',
                    green: '#34C759',
                    teal: '#5AC8FA',
                    indigo: '#5856D6',
                },
            },

            // 自定义背景渐变
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                'apple-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'liquid-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            },

            // 自定义模糊效果
            backdropBlur: {
                xs: '2px',
                '4xl': '72px',
                '5xl': '96px',
            },

            // 苹果风格缓动函数
            transitionTimingFunction: {
                'apple': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                'apple-in': 'cubic-bezier(0.4, 0.0, 1, 1)',
                'apple-out': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
                'apple-in-out': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            },

            // 自定义动画
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'glass-morph': 'glass-morph 4s ease-in-out infinite',
                'liquid-flow': 'liquid-flow 8s ease-in-out infinite',
            },

            // 自定义关键帧动画
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' },
                    'to': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)' },
                },
                'glass-morph': {
                    '0%, 100%': { backdropFilter: 'blur(10px)', borderRadius: '16px' },
                    '50%': { backdropFilter: 'blur(20px)', borderRadius: '24px' },
                },
                'liquid-flow': {
                    '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
                    '33%': { transform: 'scale(1.05) rotate(1deg)' },
                    '66%': { transform: 'scale(0.95) rotate(-1deg)' },
                },
            },

            // 自定义阴影
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glass-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                'apple': '0 4px 16px rgba(0, 0, 0, 0.12)',
                'liquid': '0 8px 40px rgba(0, 0, 0, 0.12)',
            },

            // 自定义边框
            borderRadius: {
                'apple': '16px',
                'liquid': '24px',
            },
        },
    },
    plugins: [
        // 自定义液态玻璃效果插件
        function ({ addUtilities }: any) {
            const newUtilities = {
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                },
                '.glass-button': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                },
                '.glass-button:hover': {
                    background: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
                },
                '.apple-transition': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
                },
                '.liquid-glass': {
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
                },
            };

            addUtilities(newUtilities);
        },
    ],
};

export default config; 