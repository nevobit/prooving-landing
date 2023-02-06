import React from 'react'
import Layout from '@/components/Layout';
import styles from './Blog.module.css';
import Card from '@/components/Blog/Card';
import { posts } from '@/__mooks__/posts';
import { Blog } from '@/types/Blog';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        name: 'Todo'
    },
    {
        name: 'Noticias'
    },
    {
        name: 'Reviews'
    },
    {
        name: 'Gaming'
    },
    {
        name: 'Software'
    },
    {
        name: 'Hardware'
    }
]

const Blog = () => {
  return (
    <Layout title='Blog | PC Gaming'>
      <div className={styles.container}>
        <div className={styles.header}>
            <ul>
                {categories.map((category) => (
                <li key={category.name}>{category.name}</li>
                ))}
            </ul>
            <input type="search" placeholder='Buscar en blog' />
        </div>
        <div className={styles.banner}>
            <picture>
                <Image src={posts[0].image} width={550} height={400} />          
            </picture>
            <div>
                <h5>{posts[0].category}</h5>
                <h2>{posts[0].title}</h2>
                <p>{posts[0].description}</p>
                <Link href="/">Ver mas </Link>
            </div>

        </div>
        <div className={styles.post_container}>
                {posts.map(({title, image, createdAt, description, category, views}: Blog) => (
                    <Card title={title} image={image} key={title} category={category} time={createdAt} text={description} views={views} />
                ))}
                    <Card views="20" time="Oct 12, 2022"  category="Noticias" title="Todo lo que se sabe sobre Alder Lake, los procesadores Intel de 12* generacion" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Aprende a usar Google Classrom como profesor o alumno" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Cinco cosas que debes saber antes de jugar Axie Infinity" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Como jugar a las peleas de gallos en Far Cry 6, el mini juego controversial" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Como crear un server de Minecraft gratis y alojarlo online" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Las memojes marcas de memoria RAM del mercado" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Windows 11" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Windows 11" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />
                    <Card views="20" time="Oct 12, 2022" category="Software" title="Windows 11" image='/windows.jpeg' text="Como instalar windows 11 en tu nuevo pc , realmente vale la pena hacerlo, en este post te contare que pasa realmente cunado apsas de windows 11 a windows 10" />

            </div>
      </div>
    </Layout>
  )
}

export default Blog
