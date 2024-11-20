"use client";
import styles from "./informacion.module.css";
import React from 'react';

const Descripcion = ({descripcion }) => {
  return (
    
        <div className={styles.descripcion}>{descripcion}</div> 
     
  );
};

export default Descripcion;