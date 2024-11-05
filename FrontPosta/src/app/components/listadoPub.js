"use client"
import Chat from "../components/chat";
import Publicacion from "./publicacion";
import styles from "@/app/components/listadoPub.modules.css"
const ListadoPublics = ({publics}) => {

    if (publics.length == 0) {
      return
    } else {
      
      return (
        <ul className={styles.hola}>
          {
            publics.length != 0 && 
            publics.map((publics) =>
              <Publicacion key={publics.id} imageUrl={publics.icono} productName={publics.nombrePub} precio={publics.precio}></Publicacion>
            )
          }
        </ul>
      );
    }
  }
    
    export default ListadoPublics;