import NavBar from '@/components/NavBar'
import styles from '../styles/layout.module.css'
export const metadata = {
  title: 'Cristhian',
  description: 'Mi portafolio',
}

export default function RootLayout({ children }) {
  const titnav = 'Soy Cristhian';
  const links = [
  
    { url: '#info', text: 'Informacion' },
    { url: '#Edu', text: 'Educacion' },
    { url: '#Obj', text: 'Objetivos' },
    { url: '#Expe', text: 'Experiencia' },
   
    
    
  ];
  return (
    <html lang="es-MX">
      <body className={styles.body}>
      <NavBar titnav={titnav} links={links}/>
      {children}
      </body>
     
    </html>
  )
}
