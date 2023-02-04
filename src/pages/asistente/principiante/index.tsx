import Layout from "@/components/Layout";
import React, { useState } from "react";
import styles from "../Assistant.module.css";

const Beginner = () => {
    const [type, setType] = useState('custom');
  return (
    <Layout title="Principiante">
      <div className={styles.select}>
        <h2>¿Cómo podemos ayudarte?</h2>
        <div>
          <label htmlFor="custom" className={type == 'custom'? styles.selected : ''}>
            <h3>Personalizar una PC Prooving</h3>
            <p>
              Quiero una PC a la medida de mi presupuesto y perfil de uso.
            </p>
            <input type="radio" name="type" id="custom" onChange={() => setType('custom')} />
          </label>
          <label htmlFor="catalog" className={type == 'catalog'? styles.selected : ''}>
            <h3>PC Prooving de Catálogo</h3>
            <p>
                Elegir una PC de nuestro catalogo. Soluciones para casa reto.
            </p>
            <input type="radio" name="type" id="catalog" onChange={() => setType('catalog')} />
          </label>
          <label htmlFor="service" className={type == 'service'? styles.selected : ''}>
            <h3>Servicio Tecnico</h3>
            <p>
                Reparacion, antenimiento y actualizacion de tu computadora.
            </p>
            <input type="radio" name="type" id="service" onChange={() => setType('service')} />
          </label>
          <label htmlFor="components" className={type == 'components'? styles.selected : ''}>
            <h3>Comprar Componentes de PC</h3>
            <p>
                Envianos tu lista de componentes y recibe una cotizacion.
            </p>
            <input type="radio" name="type" id="components" onChange={() => setType('components')} />
          </label>
        </div>
      </div>
    </Layout>
  );
};

export default Beginner;
