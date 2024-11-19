"use client"
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import styles from "./login.module.css" ;

export default function Login (props) {
   

    function login() {
        const username = getUserLogin()
        const password = getPasswordLogin()
    }

    

    return(
        <>
            <h1>Login</h1>
            <h2>nombre de usuario</h2>
            <input onChange={props.manejarNombre} className={styles.input} type="text" placeholder="ingresar nombre: " id ="login-username" />
            <h2>cotraseña</h2>
            <input onChange={props.manejarContraseña} className={styles.input} type="text" placeholder="ingresar contraseña: " id ="login-password" />

        </>
    )
}