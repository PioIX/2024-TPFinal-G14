"use client";
import styles from "./publicacion.module.css";
import React from 'react';

const Publicacion = ({ key, imageUrl, precio, productName  }) => {
  //const router = useRouter();

  function redirigirPublicacion(){
    location.href = "/publicacion?userId=" +  localStorage.getItem("userId") + '&idpub=' + key;
  }
  return (
    <div className={styles.cuadro}>
      {console.log(key)}
      <img src={imageUrl} alt={productName} className={styles.image} />
      <div className={styles.productName}>{productName}</div>
      <div className={styles.precio}>{precio}$</div>
      <button className={styles.botonComprar} onClick={redirigirPublicacion}>Comprar</button>
    </div>
  );
};

export default Publicacion;