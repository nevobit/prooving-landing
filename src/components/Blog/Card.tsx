import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Card.module.css'

const Card = ({title, image, time, text, category, views, slug}: any) => {
  return (
    <Link href={`/blog/${slug}`}>
        <article className={styles.card}>
            <picture>
                <Image src={image} alt={title} width={500} height={500} layout="fill" objectFit='cover' />
            </picture>
            <div className={styles.content}>
                <h5>{category}</h5>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.footer}>
                <p>{time}</p>
                <p><span>{views}</span><i className="bx bxs-low-vision"></i></p>
            </div>
        </article>
    </Link>
  )
}

export default Card
