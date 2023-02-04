import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Assistant.module.css'
const Asistant = () => {

  const [type, setType] = useState('avanzado');

  return (
    <Layout title='Asistente'>
      
      <div className={styles.select}>
        <h2>Selecciona una Opcion</h2>
          <div>
            <label htmlFor="" className={styles.transparent}></label>

          <label htmlFor="custom" className={type == 'avanzado'? styles.selected : ''}>
            <h3>Avanzado</h3>
            <p>Si tienes conocimiento de que piezas quieres aqui tu mismo podras escogerlas</p>
            <input type="radio" name="type" id="custom" onChange={() => setType('avanzado')} defaultChecked />
          </label>
          <label htmlFor="assisted" className={type == 'principiante'? styles.selected : ''} >
            <h3>Principiante</h3>
            <p>Selecciona tu presupuesto y las caracteristicas de uso y te daremos las mejores opciones.</p>
            <input type="radio" name="type" id="assisted" onChange={() => setType('principiante')} />
          </label>

          </div>
          <Link href={`/asistente/${type}`}>Siguiente</Link>

      </div>
    </Layout>
  )
}

export default Asistant
