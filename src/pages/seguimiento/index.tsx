import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Tracking.module.css";

const Tracking = () => {
  const [search, setSearch] = useState("");
  const [is, setIs] = useState(false);
  
  const verify = () => {
    if(search.toLocaleLowerCase() == 'PROO567847673'){
      setIs(true);
    }else{
      alert("Numero de seguimiento no encontrado")
    }
  }
  
  
  return (
    <Layout title="Seguimiento">
      <div className="container">
        <h2 className={styles.title}>
          Da <strong>seguimiento</strong> de su pedido
        </h2>
        <div className={styles.field}>
          <i className="bx bx-search"></i>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Numero de seguimiento" />
        </div>
        <button className={styles.btn} onClick={verify}>Consultar</button>

        {!is ? (
          

        <picture className={styles.picture}>
          <Image src="/wallet.png" width={200} height={200} alt="Empty" />        
        </picture>
                ): (
          
             <>
        <div className={styles.client}>
          <h2>Cliente</h2>
          <div>
            <span>Nombre</span>
            <p>Federico Carrasco Calderón</p>
          </div>
          <div>
            <span>Cedula</span>
            <p>1015484477</p>
          </div>
          <div>
            <span>Telefono</span>
            <p>3006679301</p>
          </div>
          <div>
            <span>Dirección</span>
            <p>Carrera 73a #167-79</p>
          </div>
          <div>
            <span>Ciudad</span>
            <p>Bogota</p>
          </div>
          <div>
            <span>Correo</span>
            <p>fcarracalderon@gmail.com</p>
          </div>
        </div>

        <div className={styles.client}>
          <h2>Articulo</h2>
          <div>
            <span>Tipo</span>
            <p>PC Gamer</p>
          </div>
          <details className={styles.details}>
            <summary>
              <i className="bx bx-cog"></i> Caracteristicas (Click aqui)
            </summary>
            <ul className={styles.list}>
              <li>Ryzen 5 5500</li>
              <li>Board B450</li>
              <li>16GB RAM DDR4</li>
              <li>RX 6600 8GB</li>
              <li>Gabinete Prooving</li>
              <li>SSD 500GB</li>
              <li>Fuente de poder 500W</li>
            </ul>
          </details>

          <div>
            <span>Peso</span>
            <p>12KG</p>
          </div>
          <div>
            <span>Numero de seguimiento</span>
            <p>PROO567847673</p>
          </div>
          <div>
            <span>Estado de envio</span>
            <p>Pendiente</p>
          </div>
          <div>
            <span>Estado del armado</span>
            <p>En Progreso</p>
          </div>
          <div>
            <span>Metodo de pago</span>
            <p>Colpartia - Nequi</p>
          </div>
          <div>
            <span>Estado del pago</span>
            <p>Pendiente</p>
          </div>
        </div>
        </>     
        
        )}
      </div>
    </Layout>
  );
};

export default Tracking;
