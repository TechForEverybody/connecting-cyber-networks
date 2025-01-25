import type { NextConfig } from 'next'
const development = process.env.NODE_ENV === 'development'

console.log('development', development, process.env.NODE_ENV)

const nextConfig: NextConfig = {
    distDir: 'dist',
    eslint: {
        ignoreDuringBuilds: false,
    },
    webpack: config => {
        if (development) {
            return config;
        }

        return {
            ...config,
            externals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
        };
    },
}

export default nextConfig
