import React from 'react'
import Subtitulo from './Subtitulo'
import Image from 'next/image'
export default function ContFooter({fooCont}) {
  return (
    <>
        {fooCont.map((cont) =>(
       <article key={cont.alt}> 
                 <section>
                <Subtitulo subtitulo={cont.subtitulo} />
           </section>
           <section> 
            <a href={cont.href}>
            <Image 
               src={cont.url}
               alt={cont.alt}
               width={cont.width}
               height={cont.height}
           />
            </a>
       
           </section>
     
      
     
       </article>
    ))}
    </>
  )
}
