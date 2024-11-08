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
import Informacion from "../components/informacion"; // Cambiado a mayúscula



export default function Publicacion() {
  const urlParams = new URLSearchParams(window.location.search);
  const idPub = urlParams.get("idpub")
  const [publicacionPage, setPublicacion] = useState([])

  async function getPublicacion(categoria) {
    console.log("categoria: ", categoria)
    let url = 'http://localhost:4000/getPublicacion' + '?idPub=' + idPub ;
    console.log("url: ", url)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const result = await response.json()
    console.log("resultado de la publicacionPage: ", result.publicacion)
    setPublicacion(result)
  }

  useEffect(() => {
    getPublicacion();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Informacion 
      precio={publicacionPage.precio} 
      productName={publicacionPage.nombrePub} 
      imageUrl={publicacionPage.icono}
      ></Informacion>
    </div>
  );
}