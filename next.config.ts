import type { NextConfig } from 'next'
const isDevelopment = process.env.NODE_ENV === 'development'

console.log('development', isDevelopment, process.env.NODE_ENV)

export const serverAPIPaths = {
    self: isDevelopment ? 'http://localhost:3000' : 'https://connecting-cyber-networks.vercel.app',
    paths:{
        getCourseData:(slug:string)=> '/api/get-course-data/'+slug,
    },
    s3Config:{
        S3_BUCKET_NAME: process.env.AWS_BUCKET_NAME ,
        AWS_REGION: process.env.AWS_REGION ,
        AWS_ACCESS_ID: process.env.AWS_ACCESS_KEY_ID ,
        AWS_SECRET_ACCESS_ID: process.env.AWS_SECRET_ACCESS_KEY ,
    }

}

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
