import Layout from '@/components/Layout'
import Header from '@/components/Layout/Header'
import PcCard from '@/components/PcCard'
import SEO from '@/components/seo'
import { Computer } from '@/types'
import { GetComputersResults } from '@/types/Computer/GetComputersResults'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage<{computers: Computer[]}> = ({computers}) => {

  console.log({computers})
  return (
    <Layout title='PC Gamers, Componentes & Periféricos Para Gamers' 
      description={'Construya computadoras extraordinarias con Prooving. PC para juegos premium, PC para juegos personalizados, software y otros productos relacionados con PC, todo para la comunidad gamer y de PC.'}
    >
      <div>
        <div className={styles.banner}>
        <h2>Super. Mega. Rapido</h2>
        <p>Disfruta del siguiente nivel de juego</p>
        <Link href="/pc">Comprar ahora</Link>
        <img className={styles.banner_img} src="/suppc2.png" alt="" />
        </div>
        {/* <div className={styles.stars}></div> */}
        {/* <div className={styles.stars2}></div> */}
        {/* <div className={styles.stars3}></div> */}

        <div className={styles.container}>
        <div className={` ${styles.hardwareking}`}>
                    <img src="/img/hk.png" alt="" />
                    <h2>EL RENDIMEINTO DE GRADO CAMPEÓN ESTA AQUÍ</h2>
                    <p>Entrando en la Arena... los Productos de edicion limitada del Hardware King </p>
                    <button>COMPRAR AHORA</button>
                </div>
          {computers.map(({name, images, price, slug}: Computer) => (
            <PcCard key={name} slug={slug} name={name} images={images} price={price} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://prooving-api-production.up.railway.app/api/v1/computers');
  
  const results: GetComputersResults = await res.json();

  console.log(results.items);
  return {
    props: {
      computers: results.items
    }
  }
}
