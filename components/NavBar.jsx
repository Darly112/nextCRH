import React from 'react'
import Nav from '@/components/Nav'
import styles from '../styles/components.module.css'
export default function NavBar({titnav,links}) {
  return (
    <header className={styles.header}>
        <h1 className={styles.titnav}>
        {titnav}
        </h1>
        <Nav links={links} />
    </header>
  )
}
