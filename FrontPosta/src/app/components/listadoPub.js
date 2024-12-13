"use client"
import Chat from "../components/chat";
import Publicacion from "./publicacion";
import styles from "@/app/components/listadoPub.module.css"
const ListadoPublics = ({publics}) => {

    if (publics.length == 0) {
      return
    } else {
      
      return (
        <ul className={styles.container}>
          {
            publics.length != 0 && 
            publics.map((publics) => (
              <Publicacion idPub={publics.id} idUserPub={publics.id_usuario} key={publics.id} imageUrl={publics.icono} productName={publics.nombrePub} precio={publics.precio}></Publicacion>
            )
            )
          }
        </ul>
      );
    }
  }
    
    export default ListadoPublics;