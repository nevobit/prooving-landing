import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <header className={styles.header}>
      <Image src="/img/logos/logotipo_white.svg" width={150} height={50} alt="Logo Prooving" />
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.menu_item}><Link href='/pcgaming'>Computadoras</Link></li>
                <li className={styles.menu_item}>Creadores</li>
                <li className={styles.menu_item}>Blog</li>
            </ul>
        </nav>

        <div className={styles.buttons}>

        <Link href="/cart">
          <span className={styles.cart}>
            <sup>0</sup>
            <i className='bx bx-cart'></i>
          </span>
        </Link>
        <Link href="/cart">
          <span className={styles.custom}>
              PC Personalizada
          </span>
        </Link>
        </div>

    </header>
  )
}

export default Footer
