"use client";
import styles from "./informacion.module.css";
import React from 'react';

const Informacion = ({ precio, productName, imageUrl}) => {

  function redirigirLoginPub() {
    location.href = "/loginPage"
  }

  async function comprar(){
    // Asegúrate de obtener el valor de "PlataUsuario" de localStorage
    const plataUsuario = parseInt(localStorage.getItem("PlataUsuario"));
    const precioNum = parseInt(precio);
  
    // Verifica si se pudo obtener el dinero del usuario correctamente
    if (isNaN(plataUsuario)) {
      alert("No se pudo obtener el saldo del usuario.");
      return;
    }
  
    const plataNueva = plataUsuario - precioNum;
    const plataNuevaVendedor = 
    console.log("el resto es: ", plataNueva);
      
    if (plataNueva < 0) {
      alert("No tiene dinero suficiente para realizar el pago.");
    } else {
      const data = {
        idvendedor: localStorage.getItem("idUserPub"),
        PlataUsuario: plataUsuario, // Usamos el valor de PlataUsuario aquí
        idUserCompra: localStorage.getItem("userId"),
        plataNueva: plataNueva
      };
    
      const response = await fetch('http://localhost:4000/Comprar', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    
      const respuesta = await response.json();
    
      if (response.status === 200) {
        alert("Compra concretada correctamente.");
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