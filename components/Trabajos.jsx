import React from 'react'
import Titulo from './Titulo'
import Image from 'next/image'
import Subtitulo from './Subtitulo'
import styles from '../styles/components.module.css';
export default function Trabajos({traCont,infoTra}) {
  return (
    <div className={styles.contTra} id='Expe'> 
        <h1>{infoTra}</h1>
    {traCont.map((cont) =>(
       <article key={cont.alt} className={styles.infoTra}> 
            <section>
                <Titulo titulo={cont.titulo}/>
              
           </section>
           <section> 
           <Image 
               src={cont.url}
               alt={cont.alt}
               width={cont.width}
               height={cont.height}
               className={styles.imgtra}
           />
           </section>
           <section>
            <Subtitulo subtitulo={cont.subtitulo} />
           </section>
      
     
       </article>
    ))}
     </div>
  )
}
