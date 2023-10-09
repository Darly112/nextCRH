import React from 'react'
import styles from '../styles/components.module.css';
import Link from 'next/link';
export default function Nav({links}) {
  return (
    <>
        {links.map((link) => (
        <nav key={link.id} className={styles.nav}>
            <Link href={link.url} className={styles.linkNav}>{link.text}</Link>
        </nav>
      ))}
    </>
  )
}
