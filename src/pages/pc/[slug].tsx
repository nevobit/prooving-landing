import Layout from "@/components/Layout";
import React, { useContext, useState } from "react";
import { NextPage } from "next";
import styles from "./Pc.module.css";
import { Computer } from "@/types";
import { Product } from "@/types/Product";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GlobalContext from "@/context/GlobalContext";
import { DivisaFormater } from "@/utilities/divisaFormater";
import LoadingBox from "@/components/Layout/LoadingBox";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { computers, monitors } from "../../__mooks__/computers";
import Image from "next/image";
// const Details: NextPage<{computer: Computer, products: Product[]}> = ({computer, products}) => {
const Details: NextPage<{ computer: Computer }> = ({
  computer,
}) => {
  const router = useRouter();
  const { cartItems, setCartItems } = useContext(GlobalContext);
  console.log({ computer });

  const [selectMedium, setSelectMedium] = useState("cash");
  const [monitor, setMonitor] = useState<any>();
  let [aditionalItems, setAditionalItems] = useState<number>(0);
  let tax = 0;
  let shippingPrice = 0;
  if (computers) {
    tax =
      selectMedium == "cash"
        ? 0
        : selectMedium == "creditCard"
        ? computer.price * 0.12
        : 5000;
    shippingPrice = computer.price < 3500000 ? 0 : 28000;
  }

  let totalPrice =
    Number(computer.specs.reduce((a, c) => a + c.price, 0)) + Number(shippingPrice) + Number(aditionalItems);

  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        name: computer.name,
        image: computer.images,
        price: totalPrice,
        quanttity: 1,
      },
    });
    router.push("/shipping");
  };

  const [loading, setLoading] = useState(false);
  const [topButton, setTopButton] = useState(false);
  const [monitorClass, setMonitorClass] = useState<any>({
    uuid: "noid",
    price: 0,
  });
  const addMonitorHandler = async (m: any) => {
    const prevValue = monitorClass ? monitorClass.price : 0;
    console.log(prevValue);
    setAditionalItems((aditionalItems -= prevValue));
    setMonitorClass(m);
    setAditionalItems((aditionalItems += m.price));
  };

  const [openFooter, setOpenFooter] = useState(false);

  return (
    <Layout title={computer.name}>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className={styles.containerMain}>
          <div className={styles.containerHeader}>
            <p>{DivisaFormater(computer.specs.reduce((a, c) => a + c.price, 0))}</p>
            {/* <button className={topButton ? `btn-principal scroll` : ""} onClick={() => addToCartHandler()}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> Ordenar
              </span>
            </button> */}
            {/* <button className={topButton? `btn-principal scroll` : "btn-principal"}>Ordenar</button> */}
            <button className={styles.btn} onClick={addToCartHandler}>
              Comprar
            </button>
          </div>
          <div className={styles.container_items}>
             <Image
              src={computer?.images[0]}
              alt={computer.name}
              width={450}
              height={450}
              objectFit={'cover'}
            /> 
            <div className={styles.container_slide}>
              <span className={styles.offer}>Oferta</span>
              <h2 className={styles.name}>{computer.name}</h2>
              <button  className={styles.btn_buy} onClick={addToCartHandler}>Comprar esta PC</button>
              <p>
              {/* <i className='bx bx-package'></i> Envios a todo el pais                 */}
              </p>
              <p className={styles.separator}><i className="bx bx-cog"></i> Configuracion del PC</p>
              <Swiper
                effect="fade"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {computer?.specs?.map((spec) => (
                  <SwiperSlide
                    zoom={true}
                    onSelect={() => setMonitor(spec)}
                    key={spec.name}
                  >
                    <div className={styles.box}>
                      <h4>{DivisaFormater(spec?.price)}</h4>
                      <p>{spec?.name}</p>
                      <img src={spec?.images[0]} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <span className={styles.dividir}>Configuración</span>
              <p className={styles.info}>Dale estilo a tu PC Gamer con nuestra variedad de opciones extra, añade todo lo que necesites.</p>
              <Swiper
                effect="fade"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper.controller)}
              >
                <SwiperSlide
                  zoom={true}
                  onSelect={() => console.log("Hi")}
                  key="1232"
                >
                  <div
                    className={
                      monitorClass?.uuid == "noid"
                        ? `${styles.box} ${styles.selected}`
                        : styles.box
                    }
                    onClick={() =>
                      addMonitorHandler({ uuid: "noid", price: 0 })
                    }
                  >
                    <img src="/no-monitor.png" alt="" />
                    <h4>{DivisaFormater(0)}</h4>
                    <p>Sin Monitor</p>
                  </div>
                </SwiperSlide>

              
                {/* {products.items
                  .filter(
                    (product: Product) =>
                      product.category == "14f9af3-c649-42c0-b679-521887d99462"
                  )
                  .map((product: Product) => (
                    <SwiperSlide key={product.name}>
                      <div
                        className={
                          monitorClass?.uuid == product.uuid
                            ? `${styles.box} ${styles.selected}`
                            : styles.box
                        }
                        onClick={() =>
                          addMonitorHandler({
                            uuid: product.uuid,
                            price: product.price,
                          })
                        }
                      >
                        <img src={product.images[0]} alt="" />
                        <h4>{DivisaFormater(product.price)}</h4>
                        <p>{product.name}</p>
                      </div>
                    </SwiperSlide>
                  ))} */}
                {/* {products.filter((moni) => moni.category == "626dd952cfc8d7c93ecd9eb3")
                  .map((moni) => (
                      <SwiperSlide
                        zoom={true}
                        onSelect={() => console.log(moni)}
                        key={moni.name}
                      >
                        <div className={monitorClass?._id == moni.uuid ? `${styles.box} ${styles.selected}` : styles.box} onClick={() => addMonitorHandler(moni)}>
                          <img src={moni.images} alt="" />
                          <h4>{DivisaFormater(moni.price)}</h4>
                          <p>{moni.name}</p>
                        </div>
                      </SwiperSlide>

                  ))} */}
              </Swiper>
              <div className={styles.dualBox}>
                <label htmlFor="wifi">
                  <i className="bx bx-wifi"></i>
                  <input
                    type="checkbox"
                    name="wifi"
                    id="wifi"
                    onChange={(e) =>
                      setAditionalItems(
                        e.target.checked == true
                          ? (aditionalItems += 40000)
                          : (aditionalItems -= 40000)
                      )
                    }
                  />
                  Agregar Wifi por: $40,000
                </label>
                <label htmlFor="bluetooth">
                  <i className="bx bx-bluetooth"></i>
                  <input
                    type="checkbox"
                    name="bluetooth"
                    id="bluetooth"
                    onChange={(e) =>
                      setAditionalItems(
                        e.target.checked == true
                          ? aditionalItems + 30000
                          : aditionalItems - 30000
                      )
                    }
                  />
                  Agregar Bluetooth por: $30,000
                </label>
              </div>
            </div>
          </div>

          <div className={styles.games_box_container}>
            <div className={styles.gamesBox}>
              <div className={styles.boxHeader}>
                <i className="bx bxs-joystick"></i> Juegos Recomendados
              </div>
              {/* <div className={styles.boxContent}>
                {computer.games.map(({ name, image }) => (
                  <img key={name} src={image} alt="" title={name} />
                ))}
              </div> */}
            </div>
            <div className={styles.gamesBox}>
              <div className={styles.boxHeader}>
                <i className="bx bxs-palette"></i> Ideal Para
              </div>
              {/* <div className={styles.boxContent}>
                {computer.programs.map((program) => (
                  <img
                    key={program.name}
                    src={program.image}
                    alt=""
                    title={program.name}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* <Package /> */}

          <div className={styles.footerPrice}>
            <button onClick={() => setOpenFooter(true)}>
              <i className="bx bx-chevron-up"></i>
            </button>
            <p>
              {DivisaFormater(Number(computer.specs.reduce((a, c) => a + c.price, 0)) + Number(aditionalItems))}
            </p>
            <span className={styles.span}>----</span>
          </div>

          <div
            className={`${styles.footerCard}  ${
              openFooter ? styles.active : ""
            }`}
          >
            <h2>Formas de pago</h2>
            <button
              className={styles.close}
              onClick={() => setOpenFooter(false)}
            >
              <i className="bx bx-x"></i>
            </button>
            <p>La seleccion de financiacion se confirmara despues del pedido</p>

            <div className={styles.buttonsContainer}>
              <button
                onClick={() => setSelectMedium("cash")}
                className={
                  selectMedium == "cash" ? styles.activeButton : styles.active
                }
              >
                Efectivo
              </button>
              <button
                onClick={() => setSelectMedium("creditCard")}
                className={
                  selectMedium == "creditCard"
                    ? styles.activeButton
                    : styles.active
                }
              >
                T. Credito
              </button>
              <button
                onClick={() => setSelectMedium("bancolombia")}
                className={
                  selectMedium == "bancolombia"
                    ? styles.activeButton
                    : styles.active
                }
              >
                Bancolombia
              </button>
            </div>

            <div>
              <ul>
                <li>
                  <p>Precio</p> {DivisaFormater(computer.price)}
                </li>
                <li>
                  <p>Tax</p> {DivisaFormater(tax)}
                </li>
                <li>
                  <p>Envio</p> {DivisaFormater(shippingPrice)}
                </li>
                <li>
                  <p>Adiciones</p> {DivisaFormater(aditionalItems)}
                </li>
                <li>
                  <p>Total</p>{" "}
                  {DivisaFormater(
                    Number(computer.specs.reduce((a, c) => a + c.price, 0)) +
                      Number(shippingPrice) +
                      Number(tax) +
                      Number(aditionalItems)
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const res = await fetch(
    `https://prooving-api-production-ac13.up.railway.app/api/v1/computer/${slug}`
    //  `http://localhost:5000/api/v1/computer/${slug}`
    
  );

  const results = await res.json();

  return {
    props: {
      computer: results,
    },
  };
}

export default Details;
