import type { NextConfig } from 'next'
const development = process.env.NODE_ENV === 'development'

console.log('development', development, process.env.NODE_ENV)

const nextConfig: NextConfig = {
    // distDir: 'dist',
    eslint: {
        ignoreDuringBuilds: false,

    },
    output:"standalone",
    images: {
        // remotePatterns: [{
        //     protocol: 'https',
        //     hostname: 's3.us-east-2.amazonaws.com',
        //     port: '',
        //     pathname: '/assets/**'
        // }]
    }
}

export default nextConfig
