"use client"
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import Login from "../components/login";
import Buscador from "../components/buscador";
import Chat from "../components/chat";
import ListadoChats from "../components/listadoChats";
import styles from "./page.module.css";
import Header from "../components/header";

export default function loginPage(){

    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mail, setMail] =useState("")
    const [usuarioLoged, setUsuarioLoged] = useState(0);

    /*async function login() {
        const data = {
            nombre: nombre,
            contraseña: contraseña,
        }


        const response = await fetch('http://localhost:4000/login',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(data),
        })
        
        var respuesta = await response.json();
        console.log(respuesta)
        localStorage.setItem("userId", respuesta.id)
        if (respuesta.status == 200) {
            setUsuarioLoged(respuesta.id)
            alert("ingreso exitoso");
            redirigir();
        } else {
            alert("el ususario o la contraseña es incorrecta");
        }
            
    }*/

    async function register(){            
        const data = {
            nombre: nombre,
            contraseña: contraseña,
            mail: mail,
        }
        const response = await fetch('http://localhost:4000/addUser',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                },
            body:JSON.stringify(data),
        }) 
        
        var respuesta = await response.json();

        if (response.status == 200)
            alert("registrado correctamente");
        localStorage.setItem("userId", respuesta.id)
            redirigir()
        if (response.status == 204)
            alert("fallo el registro");
    }

    function manejarNombre(event) {
        setNombre(event.target.value)
    }

    function manejarContraseña(event) {
        setContraseña(event.target.value)
    }

    function manejarMail(event) {
        setMail(event.target.value)
    }

    function redirigir() {
        location.href = "/home?userId=" +  localStorage.getItem("userId")
    }

    function redirigirLogin(){
        location.href = "/loginPage"
    }

    return(<>
        <div className={styles.container}>
            <div className={styles["login-box"]}>
                <h1>Registro</h1>
                <h2>Nombre de usuario</h2>
                <input onChange={manejarNombre} className={styles.input} type="text" placeholder="Ingresar nombre" id="singin-username" />
                <h2>Contraseña</h2>
                <input onChange={manejarContraseña} className={styles.input} type="password" placeholder="Ingresar contraseña" id="singin-password" />
                <h2>mail</h2>
                <input onChange={manejarMail} className={styles.input} type="mail" placeholder="Ingresar un mail" id="singin-password" />
                <button className={styles.boton} onClick={register}>Registro</button>
                <h2>.</h2>
                <button className={styles.boton} onClick={redirigirLogin}>ya tengo usuario, iniciar sesión</button>
            </div>
        </div>
    </>)


}