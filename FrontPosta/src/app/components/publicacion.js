"use client";
import { useRouter } from "next/navigation";
import styles from "./publicacion.module.css";
import React from 'react';

const Publicacion = ({ idPub, idUserPub, imageUrl, precio, productName  }) => {
  const router = useRouter();

  function redirigirPublicacion(){
    localStorage.setItem("idUserPub", idUserPub)
    const url = "/publicacion?userId=" +  localStorage.getItem("userId") + '&idpub=' + idPub;
    router.push(url);
  }
  return (
    <div className={styles.cuadro}>
      <img src={imageUrl} alt={productName} className={styles.image} />
      <div className={styles.productName}>{productName}</div>
      <div className={styles.precio}>${precio}</div>
      <button className={styles.botonComprar} onClick={redirigirPublicacion}>Ver más</button>
    </div>
  );
};

export default Publicacion;