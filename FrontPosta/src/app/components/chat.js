"use client"
import styles from "./chat.module.css"

export default function Chat ({id, text, image}) {

    function redirigir() {
        console.log(id)
        location.href = "/chatPage?userId=" +  localStorage.getItem("userId") + "&chatId=" + id
        
    }
    
    return (
        <>
            <button className={styles.chatButton} onClick={redirigir}>
                <img className={styles.imagen} src={image}/>
                <h3>{text}</h3>
            </button>
        </>
    );
}