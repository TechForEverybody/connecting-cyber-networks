'use client'

import Footer from "@/layouts/main/Footer"
import Header from "@/layouts/main/Header"
import { CourseDataType } from "@/types/data-responses"
import { useEffect } from "react"
import CourseDataComponent from "./CourseDataComponent"


type Props = {
  slug: string,
  courseData: CourseDataType
}

function RegistrationInitialsPage(
  {
    slug,
    courseData
  }: Props
) {
  useEffect(() => {
    console.log(slug)
    console.log(courseData)
  }, [])
  return (
    <>
      <Header />
      <CourseDataComponent courseData={courseData} />
      <Footer />
    </>
  )
}

export default RegistrationInitialsPage