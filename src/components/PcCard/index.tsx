import { DivisaFormater } from "@/utilities/divisaFormater";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PcCard.module.css";

interface Props {
  name: string;
  images: string[];
  price: number;
  slug: string;
  cpu?: string;
  ram?: string;
  gpu?: string;
  specs?: string[];
}

const PcCard = ({ name, images, price, slug, specs }: Props) => {
  console.log({ specs });
  return (
    <Link href={`pc/${slug}`}>
      <a className={styles.card}>
        <div>
          <h2>
            <Image
              src="/img/logos/isotipo_white.svg"
              width={20}
              height={20}
              alt="Isotipo Prooving"
            />{" "}
            {name} &reg;{" "}
          </h2>
          <picture>
            <Image src={images[0]} alt={name} width={150} height={150} />
          </picture>
          <div className={styles.price}>
            <p>Desde: </p>
            <div>
              <p>{DivisaFormater(price)}</p>
            </div>
          </div>

          {specs?.filter((spec:any) => spec.category.name == "CPU").map((spec: any) => (
            <div key={spec.uuid} className={styles.specs}>
              <p>Procesador:</p>
              <p>{spec.name}</p>
            </div>
          ))}
          
          
          {specs?.filter((spec:any) => spec.category.name == "GPU").map((spec: any) => (
            <div key={spec.uuid} className={styles.specs}>
              <p>Tarjeta Grafica:</p>
              <p>{spec.name}</p>
            </div>
          ))}
          {specs?.filter((spec:any) => spec.category.name == "RAM").map((spec: any) => (
            <div key={spec.uuid} className={styles.specs}>
              <p>Memoria RAM:</p>
              <p>{spec.name}</p>
            </div>
          ))}
          {/*           
          <div className={styles.specs}>
            <p>Tarjeta Grafica:</p>
            <p>{gpu}</p>
          </div>
          <div className={styles.specs}>
            <p>Memoria RAM:</p>
            <p>{ram}</p>
          </div> */}
        </div>
      </a>
    </Link>
  );
};

export default PcCard;
