"use client";
import styles from "./informacion.module.css";
import React from 'react';

const Informacion = ({ precio, productName, imageUrl}) => {

  function redirigirLoginPub() {
    location.href = "/loginPage"
  }

  async function comprar(){
    
    if(localStorage.getItem(userPlata) < precio){
      alert("no tiene dinero suficiente para realizar el pago")
    }else{
      const data = {
        idVenderor : localStorage.getItem(idUserPub),
        PlataUsuario : localStorage.getItem(userPlata) ,
        idUserCompra : localStorage.getItem(userId),
  
      }
  
     const response = await fetch('http://localhost:4000/Comprar',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            },
        body:JSON.stringify(data),
     }) 
    
      var respuesta = await response.json();
  
      if (response.status == 200)
        alert("Compra concretada correctamente correctamente");
      if (response.status == 204)
        alert("fallo la compra");
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