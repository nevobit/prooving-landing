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
const Details: NextPage<{ product: Product }> = ({
  product,
}) => {
  const router = useRouter();
  const { cartItems, setCartItems } = useContext(GlobalContext);

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
        ? product.price * 0.12
        : 5000;
    shippingPrice = product.price < 3500000 ? 0 : 28000;
  }

  let totalPrice =
    Number(product.price) + Number(shippingPrice) + Number(aditionalItems);

  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        name: product.name,
        image: product.images,
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
    <Layout title={product.name}>
      {loading ? (
        <LoadingBox />
      ) : (
        <div className={styles.containerMain}>
          <div className={styles.containerHeader}>
            <p>{DivisaFormater(product.price)}</p>
            <button className={styles.btn} onClick={addToCartHandler}>
              Comprar
            </button>
          </div>
          <div className={styles.container_items}>
             <Image
              src={product?.images[0].includes('https')? product.images[0] : ''}
              alt={product.name}
              width={450}
              height={450}
              objectFit={'cover'}
            /> 
            <div className={styles.container_slide}>
              <span className={styles.offer}>Oferta</span>
              <h2 className={styles.name}>{product.name}</h2>
              <button  className={styles.btn_buy} onClick={addToCartHandler}>Comprar esta componente</button>
              <p>
              {/* <i className='bx bx-package'></i> Envios a todo el pais                 */}
              </p>
            </div>
          </div>

          

          {/* <Package /> */}

          <div className={styles.footerPrice}>
            <button onClick={() => setOpenFooter(true)}>
              <i className="bx bx-chevron-up"></i>
            </button>
            <p>
              {DivisaFormater(Number(product.price) + Number(aditionalItems))}
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
                  <p>Precio</p> {DivisaFormater(product.price)}
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
                    Number(product.price) +
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
    `https://prooving-api-production-ac13.up.railway.app/api/v1/product/${slug}`
    //  `http://localhost:5000/api/v1/computer/${slug}`
    
  );

  const results = await res.json();

  return {
    props: {
      product: results,
    },
  };
}

export default Details;
