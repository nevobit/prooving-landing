import Layout from '@/components/Layout'
import Header from '@/components/Layout/Header'
import SEO from '@/components/seo'
import React, { useState } from 'react'
import styles from './Creators.module.css'

const Creators = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout title='Creadores de Contenido'>
        <SEO title='Content Creators' />
        <div className={styles.banner}>
            <h2 className={styles.main_title}>CREADORES <span className={styles.letter_title}>PROOVING</span></h2>
            <p>¿Te apasiona el streaming? ¿Estás listo para recibir recompensas por hacer lo que te gusta con Prooving? ¡Únete a nuestra iniciativa de transmisión y gana recompensas para mejorar tu configuración!</p>
            <button onClick={() => setOpenModal(true)}>Aplicar</button>
        </div>

        <dialog open={openModal} className={styles.modal} id="modal" >
            <h2>Team Prooving</h2>
        </dialog>
    </Layout>
  )
}

export default Creators
