import Layout from '@/components/Layout'
import { DivisaFormater } from '@/utilities/divisaFormater';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Placeholder = () => {
    const router = useRouter();

    // const {cartItems, setPaymentMethod, paymentMethod, shippingAddress, setShippingAddress }:any = useContext(GlobalContext);

    const cart = useSelector((state: any) => state.cart);
    const { cartItems, shippingAddress } = cart;


    // const totalPrice = paymentMethod == "MercadoPago"? cartItems.price * 0.03 : cartItems.price; 

    let tax = 0;
    let shipping = 0;
    let totalPrice = 0;
    if (shippingAddress && cartItems) {

        tax = shippingAddress?.paymentMethodHandler == 'MercadoPago' ? cartItems[0]?.price * 0.03 : 0;
        shipping = cartItems[0]?.price <= 3500000 ? 35000 : 0;
        totalPrice = Number(cartItems[0]?.price) + Number(tax) + Number(shipping);
    }

    // const payOrder = async () => {
    //     console.log("ENTRO")
    //     const { data } = await axios.post(
    //       'http://localhost:4500/mercadopago',
    //       {
    //         title: 'PC GAMER',
    //         price: 2000000,
    //       }
    //     );

    //     console.log(data)
    //   };

    // const sendMail = async() => {
    //     await axios.post('https://real-vision-api.herokuapp.com/orders', {email: shippingAddress.email, phone:shippingAddress.phone, name:shippingAddress.fullName })
    // }

    useEffect(() => {
        if (cartItems.length == 0) {
            console.log("ENTRO")
            router.push('/')
        }

        if (!shippingAddress) {
            router.push('/shipping')
        }else{
            // sendMail();
        }

    }, [cartItems, router])

    console.log(shippingAddress.paymentMethodHandler)
  return (
    <Layout title='Placeholder'>
         <div className="placeholder-content">
                <h2>Resumen de Pedido</h2>
                <div className="placeholder-card">
                    <h2 className='title'>Datos</h2>
                    <p className='top'> <span>Nombre:</span>{shippingAddress.fullName}</p>
                    <p><span>Telefono:</span>{shippingAddress.phone}</p>
                    <p><span>Correo:</span>{shippingAddress.email}</p>

                </div>
                <div className="placeholder-card">
                    <h2 className="title">Metodo de Pago</h2>
                    <p className='top'><span>Metodo:</span>{shippingAddress.paymentMethodHandler}</p>
                </div>
                <div className="placeholder-card">
                    <h2 className="title">Articulo</h2>
                    <p className='top article'><img src={cartItems[0]?.image} alt={cartItems[0]?.name} /> {cartItems[0]?.name}</p>
                </div>
                <div className="placeholder-card">
                    <h2 className="title">Reusmen de Pago</h2>
                    <p className='top'><span>Item:</span>{DivisaFormater(cartItems[0]?.price)}</p>
                    <p><span>Tax:</span>{DivisaFormater(tax)}</p>
                    <p><span>Envio:</span>{DivisaFormater(shipping)}</p>
                    <p><span>Total:</span>{DivisaFormater(totalPrice)}</p>

                </div>
                {shippingAddress.paymentMethodHandler == "MercadoPago" ? (
                    <form action="https://real-vision-api.herokuapp.com/mercadopago"
                        method="POST" encType='multipart/form-data'>
                        <input
                            type="hidden"
                            name="title"
                            value={String(cartItems[0]?.name)}
                        />
                        <input type="hidden" name="price" value={Number(totalPrice)} />
                        <input type='submit' className='placeholder-btn' value="CONTINUAR" />

                    </form>

                ) : (
                    <form action="https://checkout.wompi.co/p/"
                        method="GET" encType='multipart/form-data'>
                        <input
                            type="hidden"
                            name="public-key"
                            value="pub_prod_rxioPTJAxHjcXVi5KvbCvKAfZYLTnbeH"
                        />
                        <input type="hidden" name="currency" value="COP" />
                        <input type="hidden" name="redirect-url" value="https://real-vision-hardware-web.vercel.app" />
                        <input type="hidden" name="amount-in-cents" value={Number(totalPrice * 100)} />
                        <input type="hidden" name="reference" value="fgjhednfien3u4tn4iu3jng" />
                        <input type="hidden" name="customer-data-email" value={shippingAddress.email} />
                        <input type="hidden" name="customer-data-full-name" value={shippingAddress.fullName} />
                        <input type="hidden" name="customer-data-phone-number" value={shippingAddress.phone} />

                        <input type='submit' className='placeholder-btn' value="CONTINUAR" />

                    </form>

                )}

                {/* <button onClick={payOrder}>CONTINUAR</button> */}

            </div>
    </Layout>
  )
}

export default Placeholder
