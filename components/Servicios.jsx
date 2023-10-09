import React from 'react'
import Titulo from './Titulo'
import Image from 'next/image';
import styles from '../styles/components.module.css'
export default function Servicios({inforServe,serCont}) {
  
  return (
    <div className={styles.contServ}> 
        <h1>{inforServe}</h1>
    {serCont.map((cont) =>(
       <article key={cont.alt} className={styles.infoServ}> 
                 <section>
                <Titulo titulo={cont.titulo}/>
           </section>
           <section> 
           <Image 
               src={cont.url}
               alt={cont.alt}
               width={cont.width}
               height={cont.height}
               className={styles.imgServ}
           />
           </section>
     
      
     
       </article>
    ))}
     </div>
  )
}
