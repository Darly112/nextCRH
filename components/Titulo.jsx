import React from "react";
import styles from '../styles/components.module.css'
export default function Titulo({titulo}) {
  return (
    <>
      <h1 className={styles.titulo}>{titulo}</h1>
    </>
  );
}
