import React from "react";
import Titulo from "@/components/Titulo";
import Image from "next/image";
import styles from '../styles/components.module.css'
export default function Presentacion({ compoImg, titulo }) {
  return (
    <article className={styles.presentacion} id="info">
      <section className={styles.contImgPre}>
        {compoImg.map((cont) => (
          <Image
          className={styles.imgPrese}
            key={cont}
            src={cont.url}
            alt={cont.alt}
            width={cont.width}
            height={cont.height}
          />
        ))}
      </section>
      <section className={styles.textPre}>
        <Titulo titulo={titulo} />
      </section>
    </article>
  );
}
