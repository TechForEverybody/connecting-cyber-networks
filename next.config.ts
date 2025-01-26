import type { NextConfig } from 'next'
const development = process.env.NODE_ENV === 'development'

console.log('development', development, process.env.NODE_ENV)

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**',
        }]
    }
}

export default nextConfig
