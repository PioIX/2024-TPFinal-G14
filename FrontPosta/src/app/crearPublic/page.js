"use client";
import { useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";

export default function CrearPublicacion() {
    function manejarURL(event) {
        setURL(event.target.value);
    }

    function manejarNamePub(event) {
        setNamePub(event.target.value);
    }

    function manejarPrecio(event) {
        setPrecio(event.target.value);
    }

    function manejarCategoria(event) {
        setCategoria(event.target.value);
    }

    function crearPublicaion() {
        // Implementación de la lógica para crear la publicación
    }

    return (
        <div className={styles.containerGeneral}>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.title}>URL de la imagen</h2>
                <input
                    className={styles.input}
                    onChange={manejarURL}
                    type="text"
                    placeholder="Ingresar URL"
                    id="URL-crear"
                />
                <h2 className={styles.title}>Nombre de la publicación</h2>
                <input
                    className={styles.input}
                    onChange={manejarNamePub}
                    type="text"
                    placeholder="Ingresar nombre de la publicación"
                    id="name-crear"
                />
                <h2 className={styles.title}>Precio de la publicación</h2>
                <input
                    className={styles.input}
                    onChange={manejarPrecio}
                    type="text"
                    placeholder="Ingresar el precio de la publicación"
                    id="precio-crear"
                />
                <h2 className={styles.title}>Categoría de la publicación</h2>
                <select className={styles.select} onChange={manejarCategoria}>
                    <option value="" disabled selected>
                        Seleccionar categoría
                    </option>
                    <option value="deportes">Deportes</option>
                    <option value="electronicos">Electrónicos</option>
                    <option value="hogar">Hogar</option>
                    <option value="moda">Moda</option>
                    <option value="supermercado">Supermercado</option>
                    <option value="herramientas">Herramientas</option>
                    <option value="vehiculos">Vehículos</option>
                    <option value="juguetes">Juguetes</option>
                </select>
                <button className={styles.button} onClick={crearPublicaion}>
                    Crear publicación
                </button>
            </div>
        </div>
    );
}
