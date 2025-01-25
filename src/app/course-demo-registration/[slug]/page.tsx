import React from 'react'

type Props = {
    slug: string
}

function page({
    slug
}: Props) {
  return (
    <div>{slug}</div>
  )
}

export default page