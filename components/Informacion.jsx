import React from 'react'
import Titulo from './Titulo'
import Subtitulo from './Subtitulo'
import Image from 'next/image'
import styles from '../styles/components.module.css'
export default function Informacion({infor,titInfo,compoIm}) {
  return (
    <div className={styles.infoCont}>
      <section> 
      <h2>{titInfo}</h2>
    {infor.map((inf) =>(
   <article key={inf} className={styles.infoArt}>
    <section>
        <Titulo titulo={inf.titulo}/>
    </section>
    <section>
    <Subtitulo subtitulo={inf.subtitulo}/>
    </section>
   </article>
     ))}
      </section>

      <section className={styles.contInfoImg}>
      {compoIm.map((cont) => (
          <Image
          className={styles.imgPre}
            key={cont}
            src={cont.url}
            alt={cont.alt}
            width={cont.width}
            height={cont.height}
          />
        ))}
      </section>
   </div>
  )
}
