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
import { useRouter } from "next/navigation";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";



export default function Publicacion() {
  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const idPub = urlParams.get("idpub")
  const idUser = urlParams.get("userId")
  
  const [publicacionPage, setPublicacion] = useState([])
  const idVendedorPub = localStorage.getItem("idUserPub")

  async function getPublicacion() {
    console.log("id de la publicacion", idPub)
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
    setPublicacion(result.publicacion)
  }

  async function getPlataVendedor() {
    console.log("id del vendedor: ", idVendedorPub)
    let url = 'http://localhost:4000/getPlataVendedor' + '?idVendedorPub=' + idVendedorPub ;
    console.log("url: ", url)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const result = await response.json()
    console.log("resultado plata del vendedor: ", result.PlataVendedorRes[0])
    localStorage.setItem("plataVendedor", result.PlataVendedorRes[0])
  }

  useEffect(() => {
    getPublicacion();
    getPlataVendedor();
  }, [idPub]);

  function redigiriPorCategoria(event) {
    console.log(idUser)
    let categoria = event.target.name;
    router.push("/home?userId=" + idUser + "&categoria=" + categoria);
  }

  return (
    <div className={styles.container}>
      <Header onClick={redigiriPorCategoria} />
      { publicacionPage != undefined && 
      <Informacion 
      precio={publicacionPage.precio} 
      productName={publicacionPage.nombrePub} 
      imageUrl={publicacionPage.icono}
      ></Informacion>

      }
    </div>
  );
}