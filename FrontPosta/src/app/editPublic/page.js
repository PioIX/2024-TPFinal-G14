"use client";
import { useEffect, useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function editPublicacion() {
    const router = useRouter();
    const [Url, setURL] = useState("")
    const [name, setNamePub] = useState("")
    const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState("")
    const [Id, setIdCrea ] = useState(0)
    const [IdPubEdit, setIdPubEdit ] = useState(0)

    useEffect(() => {
        manejarId();
        let publicacion = JSON.parse(localStorage.getItem('publicacion'));
        setURL(publicacion.icono);
        setNamePub(publicacion.nombrePub);
        setPrecio(publicacion.precio);
        setCategoria(publicacion.categoria);
        setIdPubEdit(publicacion.id)
    },[])

    async function EditarPublicaion(){            
        const data = {
            Url: Url,
            name: name,
            precio: precio,
            categoria: categoria,
            Iduser: Id,
            IdPubEdit: IdPubEdit, 
        }
        const response = await fetch('http://localhost:4000/editarPub',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                },
            body:JSON.stringify(data),
        }) 
        
        var respuesta = await response.json();

        if (respuesta.status == 200)
            alert("Publicaicon editada correctamente");
            redirigir()
        if (respuesta.status == 500)
            alert("fallo al crear publicacion");
    }

    function redirigir() {
        location.href = "/home?userId=" +  localStorage.getItem("userId")
    }


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

    function manejarId() {
        setIdCrea(localStorage.getItem("userID"));
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
                    value={Url}
                />
                <h2 className={styles.title}>Nombre de la publicación</h2>
                <input
                    className={styles.input}
                    onChange={manejarNamePub}
                    type="text"
                    placeholder="Ingresar nombre de la publicación"
                    id="name-crear"
                    value={name}
                />
                <h2 className={styles.title}>Precio de la publicación</h2>
                <input
                    className={styles.input}
                    onChange={manejarPrecio}
                    type="text"
                    placeholder="Ingresar el precio de la publicación"
                    id="precio-crear"
                    value={precio}
                />
                <h2 className={styles.title}>Categoría de la publicación</h2>
                <select className={styles.select} onChange={manejarCategoria} value={categoria}>
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
                <button className={styles.button} onClick={EditarPublicaion}>
                Editar publicación
                </button>
            </div>
        </div>
    );
}
