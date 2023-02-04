import { DivisaFormater } from '@/utilities/divisaFormater';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './PcCard.module.css'

interface Props {
    name: string;
    images: string[];
    price: number;
    slug: string;
}

const PcCard = ({name, images, price, slug}:Props) => {

  return (
    <Link href={`pc/${slug}`}>
        <a className={styles.card}>
        <div>
            <h2><Image src="/img/logos/isotipo_white.svg" width={20} height={20} alt="Isotipo Prooving" /> {name} &reg;  </h2>
            <picture>
                <Image src={images[0]} alt={name} width={150} height={150} />
            </picture>
            <div className={styles.price}>
                <p>Desde: </p>
                <div>
                    <p>{DivisaFormater(price)}</p>
                </div>
            </div>

            <div className={styles.specs}>
                <p>Procesador:</p>
                <p>Ryzen 5 5600</p>
            </div>
            <div className={styles.specs}>
                <p>Tarjeta Grafica:</p>
                <p>RTX 3060 12GB</p>
            </div>
            <div className={styles.specs}>
                <p>Memoria RAM:</p>
                <p>16GB RAM DDR4</p>
            </div>
        </div>
        </a>

    </Link>
  )
}

export default PcCard
