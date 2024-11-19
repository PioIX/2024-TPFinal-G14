"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import Login from "../components/login";
import Buscador from "../components/buscador";
import Chat from "../components/chat";
import ListadoChats from "../components/listadoChats";
import styles from "./page2.module.css";
import Header from "../components/header";
import Descripcion from "../components/descripcion";
import Informacion from "../components/informacion";// Cambiado a mayúscula

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Informacion 
      precio="$30.000" 
      productName="Pelota Futbol Nassau Pro Championship Profesional Cosida N°5 Campo Color Blanco/Negro" 
      imageUrl="https://www.deportesonce.com.ar/wp-content/uploads/virtuemart/product/championship-29.jpg"
      descripcion=""
      ></Informacion>
      <Descripcion 
      descripcion="Material de Alta Calidad: Fabricada con materiales resistentes que garantizan durabilidad y una larga vida útil, incluso en condiciones de juego intensas.

Superficie Suave: Su diseño de superficie suave permite un control excelente y un toque preciso, facilitando dribles y pases.

Diseño Atractivo: Viene en colores vibrantes y patrones llamativos, destacando en el campo y aportando estilo a tu juego.

Tamaño y Peso Estándar: Cumple con las especificaciones oficiales para balones de fútbol, asegurando un rendimiento óptimo en partidos y entrenamientos.

Costura Resistente: Construida con costuras reforzadas que evitan desgarros y mejoran la resistencia general del balón.

Versatilidad: Ideal para uso en campo, césped sintético o natural, perfecta tanto para aficionados como para jugadores avanzados.

Agarre y Rebote Óptimos: Diseñada para ofrecer un rebote consistente y un agarre confiable, facilitando el control durante el juego."
      ></Descripcion>
    </div>
  );
}