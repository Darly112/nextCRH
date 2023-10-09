import React from 'react'
import Image from 'next/image'
export default function CompoImg({compoIm}) {
  return (
    <>
       {compoIm.map((compoIm) => (
          <Image key={compoIm.id}
         src={compoIm.url}
         alt={compoIm.alt}
         width={compoIm.width}
         height={compoIm.height}
        />
      ))}
    </>
  )
}
