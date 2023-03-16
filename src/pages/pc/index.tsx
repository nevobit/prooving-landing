import Layout from "@/components/Layout";
import Header from "@/components/Layout/Header";
import PcCard from "@/components/PcCard";
import SEO from "@/components/seo";
import { Computer } from "@/types";
import { GetComputersResults } from "@/types/Computer/GetComputersResults";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import styles from "./Pc.module.css";

const Pc: NextPage<{ computers: Computer[] }> = ({ computers }) => {
  console.log({ computers });
  return (
    <Layout title="Inicio">
      <div>
        <div className={styles.banner}>
          <h2>COMPUTADORAS</h2>
          <p>
            Ya sea que busques una PC Gamer para jugar o para hacer streaming,
            una Workstation para tu empresa o profesión, o alguna Computadora
            armada para realizar proyectos o tareas específicas, podemos
            hacerla. <strong>El desempeño será evidente.</strong>
          </p>
        </div>

        <div className={styles.container}>
          <div className={` ${styles.hardwareking}`}>
            <Image
              src="/img/hk.png"
              alt="Logo El Rey del Hardware"
              width={130}
              height={180}
            />
            <h2>EL RENDIMEINTO DE GRADO CAMPEÓN ESTA AQUÍ</h2>
            <p>
              Entrando en la Arena... los Productos de edicion limitada del
              Hardware King{" "}
            </p>
            <button>COMPRAR AHORA</button>
          </div>
          {computers.map(({ name, images, price, slug, specs }: Computer) => (
            <PcCard
              key={name}
              slug={slug}
              name={name}
              images={images}
              price={price}
              specs={specs}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pc;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://prooving-api-production-ac13.up.railway.app/api/v1/computers"
    // "http://localhost:5000/api/v1/computers"
    
  );

  const results: GetComputersResults = await res.json();

  return {
    props: {
      computers: results.items,
    },
  };
};
