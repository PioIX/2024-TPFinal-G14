"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import Login from "../components/login";
import Buscador from "../components/buscador";
import Chat from "../components/chat";
import ListadoChats from "../components/listadoChats";
import styles from "./page.module.css";
import Header from "../components/header";
import Publicacion from "../components/publicacion";
import ListadoPublics from "../components/listadoPub";


export default function Home({ Component, pageProps }) {
  const [publics, setPublics] = useState([]);

  async function getPublicaciones(categoria) {
    console.log("categoria: ", categoria);
    let url =
      'http://localhost:4000/getPublicaciones' +
      "?userId=" +
      localStorage.getItem("userId") +
      "&categoria=" +
      categoria;
    console.log("url: ", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log("result: ", result.publicaciones);
    localStorage.setItem("publicId", result.publicaciones);
    setPublics(result.publicaciones);
  }

  async function fetchProductos(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaURL = urlParams.get("categoria");

    const categoria = categoriaURL || event.target.name;

    await getPublicaciones(categoria);
  }

  useEffect(() => {
    getPublicaciones("general");
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header onClick={fetchProductos} />
        <ListadoPublics publics={publics}></ListadoPublics>
      </div>
    </>
  );
}
