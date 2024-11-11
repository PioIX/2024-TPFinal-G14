"use client";
import styles from "./informacion.module.css";
import React from 'react';

const Informacion = ({ precio, productName, imageUrl}) => {

  function redirigirLoginPub() {
    location.href = "/loginPage"
  }

  return (
    <div className={styles.container}>
      <div className={styles.cuadro}>
        <img src={imageUrl} alt={productName} className={styles.imagen} />
        <div className={styles.detalles}>
          <div className={styles.productName}>{productName}</div>
          <div className={styles.precio}>${precio}</div>
          {
            localStorage.getItem("userId") == localStorage.getItem("idUserPub") ? 
            <button className={styles.botonComprar}>Editar publicaciòn</button>
            :
            localStorage.getItem("userId") > 0 ?
            <button className={styles.botonComprar}>Comprar ahora</button>
            :
            <button className={styles.botonComprar} onClick={redirigirLoginPub}>Igrese para comprar</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Informacion;