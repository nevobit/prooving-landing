import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <footer className={styles.footer}>
      <div>

      <div>
        <div className={styles.images}>
        <Image src="/img/logos/logotipo_white.svg" width={100} height={40} alt="Logo Prooving" />
        <Image src="/colombia.png" width={20} height={20} alt="Logo Prooving" />

        </div>
        {width > 800? (
        <p className={styles.copy}>&copy; Prooving SAS. 2023  Todos los Derechos Reservados</p>

        ): null}
      </div>
      {width > 800? (

      <div>
        <Link href="/">
          Legal
        </Link>
        <Link href="/">
          Politica de Privacidad
        </Link>
        <Link href="/">
          Manejo de Cookies
        </Link>
      </div>
      ): null}

      </div>


      <Link  href="https://api.whatsapp.com/send?phone=573207768383&text=Hola, me interesa un producto"><a><i className='bx bxl-whatsapp'></i> Chat </a></Link>
    </footer>
  )
}

export default Footer
