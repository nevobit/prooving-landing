import Layout from "@/components/Layout";
import Header from "@/components/Layout/Header";
import PcCard from "@/components/PcCard";
import SEO from "@/components/seo";
import { Computer } from "@/types";
import { GetComputersResults } from "@/types/Computer/GetComputersResults";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

import { useEffect, useState } from "react";

const loadModel = () => {
  const scene = new THREE.Scene();
  scene.add(new THREE.AxesHelper(5));

  const light = new THREE.SpotLight();
  light.position.set(5, 5, 5);
  scene.add(light);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const loader = new GLTFLoader();

  loader.load(
    "models/pc/scene.gltf",
    function (gltf) {
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      console.log(gltf.scene);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );

  //   window.addEventListener('resize', onWindowResize, false)
  // function onWindowResize() {
  //     camera.aspect = window.innerWidth / window.innerHeight
  //     camera.updateProjectionMatrix()
  //     renderer.setSize(window.innerWidth, window.innerHeight)
  //     render()
  // }

  // const stats = Stats()
  // document.body.appendChild(stats.dom)

  // function animate() {
  //     requestAnimationFrame(animate)

  //     controls.update()

  //     render()

  //     stats.update()
  // }

  // function render() {
  //     renderer.render(scene, camera)
  // }

  // animate()
};

const Home: NextPage<{ computers: Computer[], products: any }> = ({ computers, products }) => {
  const setCpuHandler = (specs: string[]): string => {
    const pro = products.filter(
      (p: any) =>
        p.uuid == specs[0] &&
        p.category == "c4ada22e-aaea-40d4-acb1-2a77f966f7af"
    );
    return pro[0]?.name;
  };

  const setRamHandler = (specs: string[]): string => {
    
    const pro = products.filter(
      (p: any) =>
        p.uuid == specs[2] &&
        p.category == "b5299231-3ad6-42b3-b304-8f8e0b8ca08d"
    );
    return pro[0]?.name;
  };

  return (
    <Layout
      title="PC Gamers, Componentes & Periféricos Para Gamers"
      description={
        "Construya computadoras extraordinarias con Prooving. PC para juegos premium, PC para juegos personalizados, software y otros productos relacionados con PC, todo para la comunidad gamer y de PC."
      }
    >
      <div>
        <div className={styles.banner}>
          <h2>Super. Mega. Rapido</h2>
          <p>Disfruta del siguiente nivel de juego</p>
          <Link href="/pc">Comprar ahora</Link>
          <Image
            className={styles.banner_img}
            priority={true}
            src="/suppc2.png"
            alt="Super PC Foto"
            width={500}
            height={500}
          />
        </div>

        <section>
          <div className={styles.pc_white}>
            <div>
              <h3>Recien Lanzada: Nvidia RTX 4070 Ti</h3>
              <p>
                Mas rapido que la 3080 y la mitad del tamano. Arma tu PC
                personalizada con la nueva RTX 4070 Ti
              </p>
              <Link href="/asistente">Personaliza tu PC</Link>
            </div>
            <picture>
              <Image
                src="/pc-w.png"
                alt="Logo El Rey del Hardware"
                width={250}
                height={250}
              />
            </picture>
          </div>
        </section>

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
          {computers.map(({ name, images, price, slug, specs }: any) => (
            <PcCard
              key={name}
              slug={slug}
              name={name}
              images={images}
              price={price}
              specs={specs}
              cpu={setCpuHandler(specs)}
              ram={setRamHandler(specs)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "https://prooving-api-production.up.railway.app/api/v1/computers"
  );
  const resProducts = await fetch(
    "https://prooving-api-production.up.railway.app/api/v1/products?limit=100"
  );

  const results: GetComputersResults = await res.json();
  const resultsProducts: GetComputersResults = await resProducts.json();

  console.log(resultsProducts.items);
  return {
    props: {
      computers: results.items,
      products: resultsProducts.items,
    },
  };
};
