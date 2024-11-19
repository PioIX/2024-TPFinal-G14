"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import styles from "./header.module.css"


export default function Header(props) {
    
    function redirigirLogin(){
        location.href = "/loginPage"
    }

    function redirigirSingin(){
        location.href = "/singinPage"
    }
    
    return (
        < >
         <header className={styles.header1} >
                <div className={styles.topBar} >
                    <div className={styles.logo}>
                    <img src="images/logoCacho.png" className={styles.logoImage} alt="Logo" />
                 </div>
                    <div className={styles.searchBar}>
                     <input type="text" placeholder="Search..." />
                 </div>
                    <div className={styles.authButtons}>
                        <button className={styles.login} onClick={redirigirLogin} >Login</button>
                        <button className={styles.register} onClick={redirigirSingin} >Register</button>
                    </div>
             </div>
             <nav className={styles.navBar}>
                 <button>Mis productos</button>
                    <button>Deportes</button>
                    <button>Electrónicos</button>
                    <button>Hogar</button>
                    <button>Moda</button>
                    <button>Supermercado</button>
                 <button>Herramientas</button>
                    <button>Vehículos</button>
                    <button>Juguetes</button>
                    <button>General</button>
                </nav>
            </header>
        </>
    );
}
