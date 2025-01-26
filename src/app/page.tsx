'use client'

import Footer from '@/layouts/main/Footer'
import Header from '@/layouts/main/Header'
import BlogsHero from '@/sections/landing-page/BlogsHero'
import ContactHero from '@/sections/landing-page/ContactHero'
import CourseHero from '@/sections/landing-page/CourseHero'
import HomeHero from '@/sections/landing-page/HomeHero'
import ServicesHero from '@/sections/landing-page/Services'

export default function Home() {
    return (
        <>
            <Header />
            <HomeHero />
            <CourseHero />
            <ServicesHero/>
            <BlogsHero/>
            <ContactHero/>
            <Footer />
        </>
    )
}
