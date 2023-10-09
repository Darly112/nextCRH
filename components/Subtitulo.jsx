import React from 'react'
import styles from '../styles/components.module.css'
export default function Subtitulo({subtitulo}) {
  return (
    <>
    <p className={styles.titulo}>{subtitulo}</p>
    </>
  )
}
