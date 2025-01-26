import type { Metadata } from 'next'
import './globals.css'
import ContextProviders from './providers'

export const metadata: Metadata = {
    title: 'Connecting Cyber Networks: The Best Ethical Hacking And Cyber Security Institute in Mumbai',
    description:
        'Enroll in job-guaranteed programs at Connecting Cyber Networks. Master IT skills in cybersecurity, networking, and more, with 100% placement assistance in Mumbai.',
    keywords:
        'job guaranteed programs, IT career programs, cybersecurity training, networking courses, 100% job placement, job guarantee courses Mumbai, IT training',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://connecting-cyber-networks.vercel.app/',
        title: 'The Best Ethical Hacking And Cyber Security Institute in Mumbai',
        description:
            'Enroll in job-guaranteed programs at Connecting Cyber Networks. Master IT skills in cybersecurity, networking, and more, with 100% placement assistance in Mumbai.',
        countryName: 'India',
        images: [
            {
                url: 'https://dermisect.vercel.app/images/logo/dermisect-icon.png',
                width: 800,
                height: 600,
                alt: 'Dermisect',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" data-lt-installed="true" cz-shortcut-listen="true">
            <body
                
            >
                <ContextProviders>{children}</ContextProviders>
            </body>
        </html>
    )
}
