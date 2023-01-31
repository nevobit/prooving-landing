import Layout from '@/components/Layout'
import Header from '@/components/Layout/Header'
import SEO from '@/components/seo'
import React from 'react'
import styles from './Creators.module.css'

const Creators = () => {
  return (
    <Layout title='Creadores de Contenido'>
        <SEO title='Content Creators' />
        <div className={styles.banner}>
            <h2 className={styles.main_title}>CREADORES <span className={styles.letter_title}>PROOVING</span></h2>
            <p>¿Te apasiona el streaming? ¿Estás listo para recibir recompensas por hacer lo que te gusta con Prooving? ¡Únete a nuestra iniciativa de transmisión y gana recompensas para mejorar tu configuración!</p>
            <button>Aplicar</button>
        </div>
    </Layout>
  )
}

export default Creators
