"use client";
import styles from "./informacion.module.css";
import React, { useState } from 'react';

const Informacion = ({ precio, productName, imageUrl}) => {

  function redirigirLoginPub() {
    location.href = "/loginPage"
  }

  async function comprar(){
    // Asegúrate de obtener el valor de "PlataUsuario" de localStorage

    const urlParams = new URLSearchParams(window.location.search);
    const idPub = urlParams.get("idpub")
    const plataNueva = parseInt(localStorage.getItem("userPlata")) - parseInt(precio);
    const plataNuevaVendedor = parseInt(localStorage.getItem("plataVendedor")) + parseInt(precio)
    const [aptoCompra, setAptoCompra] = useState("true")
    console.log("userPlata: ", parseInt(localStorage.getItem("userPlata")))
    console.log ("el precio es: ", parseInt(precio))
    console.log ("la plata del vendedor seria: ", plataNuevaVendedor)
    console.log("el resto es: ", plataNueva);
      
    if (plataNueva < 0) {
      alert("No tiene dinero suficiente para realizar el pago.");
      setAptoCompra("false")
    } 
    if (aptoCompra == "true") {
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
      
      console.log("respuesta: ", response)
    
      if (response.status === 200) {
        alert("Compra concretada correctamente.");
        setTimeout(() => {
          location.reload();
        }, 1000); // Retardo de 1 segundo
      } else if (response.status === 204) {
        alert("Falló la compra.");
      } else {
        alert("Error en la compra.");
      }
    }
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