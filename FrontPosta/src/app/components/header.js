"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import styles from "./header.module.css"
import { useRouter } from "next/navigation";


export default function Header(props) {
    const router = useRouter();
    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState("");
    const [userPlata, setUserPlata] = useState("");

    async function getNameHeader(){

        const urlParams = new URLSearchParams(window.location.search);
        const idUsuario = urlParams.get("userId")
        setUserId(idUsuario);

        const response = await fetch('http://localhost:4000/getUserMoney?userId=' + idUsuario,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        var respuesta = await response.json();
        console.log("datos de usuario", respuesta)
        setUsername(respuesta.nombre)
        setUserPlata(respuesta)//------------------------
        localStorage.setItem("userName", respuesta.nombre)
    }

    useEffect(() => {
        getNameHeader();
    },[])

    function redirigirLogin(){
        router.push("/loginPage");
    }

    function redirigirSingin(){
        router.push("/singinPage");
    }
    
    function redirigirLogout() {
        localStorage.setItem("userId", 0)
        setUserId(0);
        router.push("/home");
    }
    
    function redirigir() {
        const url = "/home?userId=" +  localStorage.getItem("userId");
        router.push(url);
    }

    console.log("ID", userId);

    return (
        < >
         <header className={styles.header1} >
                <div className={styles.topBar} >
                    <div className={styles.logo}>
                    <a onClick={redirigir}><img src="images/logoCacho.png" className={styles.logoImage} alt="Logo" /></a>
                 </div>
                    <div className={styles.searchBar}>
                 </div>
                    { 
                        userId > 0 ?
                        <div className={styles.authButtons}>
                            <h2>{username}</h2>
                            <h2>dinero</h2>
                            <button className={styles.login} onClick={redirigirLogout}>Logout</button>
                        </div>

                        :

                        <div className={styles.authButtons}>
                            <button className={styles.login} onClick={redirigirLogin} >Login</button>
                            <button className={styles.register} onClick={redirigirSingin} >Register</button>
                        </div>
                    }
                    
             </div>
             <nav className={styles.navBar}>
                    <button name="misproductos"onClick={props.onClick}>Mis productos</button>
                    <button name="deportes" onClick={props.onClick}>Deportes</button>
                    <button name="electronicos" onClick={props.onClick}>Electrónicos</button>
                    <button name="hogar" onClick={props.onClick}>Hogar</button>
                    <button name="moda" onClick={props.onClick}>Moda</button>
                    <button name="supermercado" onClick={props.onClick}>Supermercado</button>
                    <button name="herramientas" onClick={props.onClick}>Herramientas</button>
                    <button name="vehiculos" onClick={props.onClick}>Vehículos</button>
                    <button name="juguetes" onClick={props.onClick}>Juguetes</button>
                    <button name="general" onClick={props.onClick}>General</button>
                </nav>
            </header>
        </>
    );
}
