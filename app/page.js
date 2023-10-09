"use client"
import { useState } from 'react';
import Presentacion from "@/components/Presentacion";
import Informacion from "@/components/Informacion";
import Bases from "@/components/Bases";

import Objetivos from '@/components/Objetivos';
import Trabajos from "@/components/Trabajos";

import styles from '../styles/components.module.css'
export default function Home() {
  const compoImg = [
  
    { id:'1', url:'/atcWeb1.jpg', alt:'img', width:'700',height:'400'  },

  ];
  const compoIm = [
  
    { id:'1', url:'/FotoPerfilCris.jpg', alt:'img', width:'300',height:'300'  },

  ];
  const infor =[
    {titulo:'Soy ',subtitulo:'Cristhian Rodriguez Hernandez'},
    {titulo:'Tengo ',subtitulo:'18 Años'},
    {titulo:'Vivo en la ciudad de ',subtitulo:'Tuxtla Gutiérrez'},
    {titulo:'Soy ',subtitulo:'Estudiante a Tiempo Completo'},
    {titulo:'Insta',subtitulo:'christian.hdz'},
    {titulo:'Id epic',subtitulo:'crisgopr117'},
    
  ]
  const titInfo ='Un Poco Sobre Mi';
  const titulo = 'Cristhian Rodriguez Hernandez';
  const inforObj = 'Objetivos';
  const serObj =[
    {titulo:'Front-End',url:'https://cdn-icons-png.flaticon.com/128/4882/4882466.png', alt:'img', width:'100',height:'100'},
    {titulo:'Back-End',url:'https://cdn-icons-png.flaticon.com/128/8099/8099237.png', alt:'img', width:'100',height:'100'},
    {titulo:'Java',url:'https://cdn-icons-png.flaticon.com/128/152/152760.png', alt:'img', width:'100',height:'100'},
    {titulo:'C++',url:'https://cdn-icons-png.flaticon.com/128/460/460836.png', alt:'img', width:'100',height:'100'},
    {titulo:'JavaScript',url:'https://cdn-icons-png.flaticon.com/128/1/1492.png', alt:'img', width:'100',height:'100'},
   
  ];
  const subObj = 'Pues mejorar mi capacidad de entendimiento y la implementación de las tecnológicas tanto en Front-end y Back-end. Esto incluye los lenguajes tales como Java, c++ y JavaScript.'
  const traCont =[
    {titulo:'IDS Movies',subtitulo:'Explora un vasto catálogo de películas de todos los géneros, desde emocionantes películas de acción hasta conmovedores dramas y divertidas comedias. ',url:'/atcWeb2.jpg', alt:'img', width:'1000',height:'600'},
    {titulo:'Farmacia Darwin',subtitulo:'Encontrarás una amplia gama de medicamentos genéricos de alta calidad a precios asequibles. Navega fácilmente por nuestro catálogo, consulta información detallada sobre productos y realiza tus pedidos de forma segura y discreta desde la comodidad de tu hogar. ',url:'/integrador4.jpg', alt:'img', width:'1000',height:'600'},
   
  ];
  const infoTra ='Experiencia laboral';

  const baseTit = 'Sobre mis Estudios'
  const baseSub = 'Mi educación sigue en curso en la Universidad Politécnica de Chiapas en la cual dia a dia me impulsa a seguir mejorando en las tecnología aprendidas y lenguajes' 
  const baseImg = [
  
    { id:'1', url:'/logoUP.png', alt:'img', width:'200',height:'200'  },

  ];
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
   <main className={`contenido ${modoOscuro ? 'dark-mode' : ''}`} >
     <button onClick={toggleModoOscuro} className={styles.botonDark}>Modo Oscuro</button>
     <style jsx>{`
        .contenido {
          background-color: #ffffff;
          color: #333333;
          padding:0;
         
          border-radius: 5px;
          transition: 2s all ease;
          scroll-behavior: smooth;
        }
        .dark-mode {
          background-color: #333333;
          color: #ffffff;
          border-color: #666666;
        }
      `}</style>
    <Presentacion compoImg={compoImg} titulo={titulo}/>
    <Informacion infor={infor} titInfo={titInfo} compoIm={compoIm}/>
    <Bases baseTit={baseTit} baseSub={baseSub} baseImg={baseImg} />
    <Objetivos  inforObj={inforObj} serObj={serObj} subObj={subObj} />

    <Trabajos traCont={traCont} infoTra={infoTra}/>
    <button onClick={toggleModoOscuro} className={styles.botonDark}>Modo Oscuro</button>
   </main>
  );
}
