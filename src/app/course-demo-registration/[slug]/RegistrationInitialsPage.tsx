'use client'

import Footer from "@/layouts/main/Footer"
import Header from "@/layouts/main/Header"


type Props = {
  slug: string,
}

function RegistrationInitialsPage(
  {
    slug
  }: Props
) {
  return (
    <>
      <Header />
      {
        slug === 'registration' ? (
          <div>
            <h1>Registration</h1>
          </div>
        ) : (
          <div>
            <h1>Registration Initials</h1>
          </div>
        )
      }
      <Footer />
    </>
  )
}

export default RegistrationInitialsPage