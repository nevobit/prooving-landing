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
      {width > 800 ? (
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>
              <Link href="/pc">Computadoras</Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/creadores">Creadores</Link>
            </li>
            <li className={styles.menu_item}>Blog</li>
          </ul>
        </nav>
      ) : null}

      <div className={styles.buttons}>
        <Link href="/cart">
          <span cart-count="0" className={styles.cart}>
            <i className="bx bx-cart"></i>
          </span>
        </Link>
        {width > 800 ? (
          <Link href="/assistant">
            <span className={styles.custom}>PC Personalizada</span>
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
