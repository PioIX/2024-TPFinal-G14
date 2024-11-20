"use client";
import styles from "./informacion.module.css";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Informacion = ({ precio, productName, imageUrl}) => {
  const router = useRouter();

  function redirigirLoginPub() {
    location.href = "/loginPage"
  }

  async function comprar(){

    const urlParams = new URLSearchParams(window.location.search);
    const idPub = urlParams.get("idpub")
    const plataNueva = parseInt(localStorage.getItem("userPlata")) - parseInt(precio);
    const plataNuevaVendedor = parseInt(localStorage.getItem("plataVendedor")) + parseInt(precio)
    console.log("userPlata: ", parseInt(localStorage.getItem("userPlata")))
    console.log ("el precio es: ", parseInt(precio))
    console.log ("la plata del vendedor seria: ", plataNuevaVendedor)
    console.log("el resto es: ", plataNueva);
      
    if (plataNueva < 0) {
      alert("No tiene dinero suficiente para realizar el pago.");
    } 
    else {
      const data = {
        idPub: idPub,
        idvendedor: localStorage.getItem("idUserPub"), 
        idUserCompra: localStorage.getItem("userId"),
        plataNueva: plataNueva,
        plataNuevaVendedor: plataNuevaVendedor
      };
    
      const response = await fetch('http://localhost:4000/Comprar', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const respuesta = await response.json();
      console.log("respuesta: ", respuesta);
      localStorage.setItem("idUserPub", localStorage.getItem("userID") )
      
      if (respuesta.status == 200) {
        alert("Compra concretada correctamente.");
        
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else if (respuesta.status === 500) {
        alert("Falló la compra.");
      } else {
        alert("Error en la compra.");
      }
    }
  }

  function redirigirEdit(){
    router.push("/editPublic?userId=" +  localStorage.getItem("userId"));
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
            <button className={styles.botonComprar} onClick={redirigirEdit}>Editar publicaciòn</button>
            :
            localStorage.getItem("userId") > 0 ?
            <button className={styles.botonComprar} onClick={comprar}>Comprar ahora</button>
            :
            <button className={styles.botonComprar} onClick={redirigirLoginPub}>Igrese para comprar</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Informacion;