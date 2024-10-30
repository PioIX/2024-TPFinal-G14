"use client"
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

export default function home(){

  async function getChats(){
    
    let url = 'http://localhost:4000/getPublicaciones' + '?userId=' +  localStorage.getItem("userId");

    const response = await fetch(url,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const result = await response.json()
    console.log(result)
    localStorage.setItem("chatId", result.id)
    setChats(result.chats)
}

  async function fetchProductos(event) {
    console.log(event.target.name)
    var categoria = event.target.name;
    let url = 'http://localhost:4000/getPublicaciones' + '?userId=' +  localStorage.getItem("userId") + '&categoria=' + categoria;
    const response = await fetch(url,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const result = await response.json()
    console.log(result)
  }

    return(<>
    <div className={styles.container}>
        <Header onClick={fetchProductos} />
        <Publicacion 
          precio="$430.000" 
          productName="Bicicleta" 
          imageUrl="https://acdn.mitiendanube.com/stores/002/522/532/products/shiftlateral1-e8780b88064bc303bf16771490269917-1024-1024.webp" 
        />
      </div>
    </>)
}