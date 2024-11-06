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

    return(<>
    <div className={styles.container}>
        <Header />
        <Publicacion 
          precio="$430.000" 
          productName="Bicicleta" 
          imageUrl="https://acdn.mitiendanube.com/stores/002/522/532/products/shiftlateral1-e8780b88064bc303bf16771490269917-1024-1024.webp" 
        />
        <Publicacion 
          precio="$40.000" 
          productName="Pelota" 
          imageUrl="https://www.deportesonce.com.ar/wp-content/uploads/virtuemart/product/championship-29.jpg" 
        />
        <Publicacion 
          precio="$430.000" 
          productName="Camperon" 
          imageUrl="https://assets.christiandior.com/is/image/diorprod/147C21A2968X5803_E01?$default_GHC_1280$&crop=409,97,1225,1673&bfc=on&qlt=85" 
        />
        <Publicacion 
          precio="$43.000" 
          productName="Repasador" 
          imageUrl="https://http2.mlstatic.com/D_NQ_NP_846479-MLA49647420158_042022-O.webp" 
        />
        <Publicacion 
          precio="$40.000" 
          productName="Muñeca Barbie" 
          imageUrl="https://m.media-amazon.com/images/I/512Di0pExNL._AC_.jpg" 
        />
        <Publicacion 
          precio="$10.000" 
          productName="Hot Wheels" 
          imageUrl="https://http2.mlstatic.com/D_NQ_NP_976896-MLA70810620716_082023-O.webp" 
        />
        <Publicacion 
          precio="$12.000" 
          productName="Martillo" 
          imageUrl="https://www.abrafersrl.com.ar/wp-content/uploads/MCU18-510x510.jpg" 
        />
        <Publicacion 
          precio="$25.000" 
          productName="Almohadon" 
          imageUrl="https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/a/l/almohadon_simil_lana_4_1.jpg" 
        />
      </div>
    </>)
}