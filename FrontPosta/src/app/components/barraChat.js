"use client"
import styles from "./barraChat.module.css" ;

const BarraChat = ({}) => {
    return(
        <input className={styles.input} type="text" placeholder="Mensajes " id ="barraChat" />
    )
}

export default BarraChat;
