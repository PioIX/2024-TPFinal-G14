// components/Footer.js

import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Iconos de WhatsApp e Instagram
import styles from './Footer.module.css'; // Para estilos personalizados (opcional)

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Gracias por visitar la página</p>
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/_tomietche/profilecard/?igsh=MW5meGEzbWZyMWY4Yw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/_tomietche/profilecard/?igsh=MW5meGEzbWZyMWY4Yw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
