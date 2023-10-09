import React from 'react'
import Titulo from './Titulo'
import Image from 'next/image';
import Subtitulo from './Subtitulo';
import styles from '../styles/components.module.css'
export default function Objetivos({inforObj,serObj,subObj}) {
  return (
    <div className={styles.contObj} id='Obj'> 
    <h2>{inforObj}</h2>
    <Subtitulo subtitulo={subObj} />
   <article className={styles.infoObj}> 
    	{serObj.map((cont) =>(
<>  
            <div className={styles.imgConts}>

           
             <section key={cont.alt}>
            <Titulo titulo={cont.titulo}/>
       </section>
       <section className={styles.contImgObj}> 
       <Image 
           src={cont.url}
           alt={cont.alt}
           width={cont.width}
           height={cont.height}
           className={styles.imgObj}
       />
       </section>
       </div>
    </>
 	))}
   </article>
    </div>
  )
}
