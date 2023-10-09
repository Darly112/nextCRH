import React from 'react'
import Titulo from './Titulo'
import Subtitulo from './Subtitulo'
import Image from 'next/image';
import styles from '../styles/components.module.css'
export default function Bases({baseTit,baseSub,baseImg}) {
    const titulo = baseTit;
    const subtitulo = baseSub;
  return (
    <article className={styles.bases} id='Edu'> 
        <section className={styles.textBases}>
        <Titulo titulo={titulo}/>
        <Subtitulo subtitulo={subtitulo}/>
        </section>
        <section>
        {baseImg.map((cont) => (
          <Image
            className={styles.imgBase}
            key={cont}
            src={cont.url}
            alt={cont.alt}
            width={cont.width}
            height={cont.height}
          />
        ))}
        </section>
    </article>
  )
}
