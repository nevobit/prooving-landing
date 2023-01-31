import SEO from "@/components/seo";
import Link from "next/link";
import React from "react";
import styles from "./Error.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <SEO title="Error" />
      <div>
        <div className={styles.face}>
          <i className="bx bx-x"></i>
          <i className="bx bx-x"></i>
        </div>
        <div>

        <h3>Lo sentimos, no pudimos encontrar esta pagina</h3>
        <p>
          Pero no te preocupes, tu puedes buscar tranquilamente otras cosas en
          nuestra pagina de inicio.
        </p>
        </div>

        <Link href="/">Volver a la pagina de inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
