import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const getWindowDimensions = () => {
  // Client-side-only code
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Header = () => {
  const [width, setWidth] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            src="/img/logos/logotipo_white.svg"
            width={150}
            height={30}
            alt="Logo Prooving"
          />
        </a>
      </Link>
      <nav className={`${styles.nav} ${menu? styles.open: null}`}>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link href="/pc">Computadoras</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/creadores">Creadores</Link>
          </li>
          <li className={styles.menu_item}><Link href="/blog">Blog</Link></li>
          <li className={styles.menu_item_mobile_gray}><Link href="/cart">Carrito</Link></li>
          <li className={styles.menu_item_mobile}><Link href="/asistente">PC Personalizada</Link></li>
        </ul>
      </nav>

      <div className={styles.buttons}>
        <Link href="/cart">
          <span cart-count="0" className={styles.cart}>
            <i className="bx bx-cart"></i>
          </span>
        </Link>
          <Link href="/asistente">
            <span className={styles.custom}>PC Personalizada</span>
          </Link>

      </div>
      <button title="Menu" className={styles.menu_btn} onClick={() => setMenu(!menu)} ><i className='bx bx-menu'></i></button>

    </header>
  );
};

export default Header;
