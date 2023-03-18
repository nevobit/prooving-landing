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

const ComponentCard = ({ name, images, price, slug }: Props) => {
  console.log(images)
  return (
    <Link href={`componentes/${slug}`}>
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
            <Image src={images[0].includes('https')? images[0] : ""} alt={name} width={150} height={150} />
          </picture>
          <div className={styles.price}>
            <p>Desde: </p>
            <div>
              <p>{DivisaFormater(price)}</p>
            </div>
          </div>
          
        </div>
      </a>
    </Link>
  );
};

export default ComponentCard;
