import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Shipping = () => {

    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethodHandler, setPaymentMethodHandler] = useState("Bancolombia");

    const cart = useSelector((state:any) => state.cart);
    const {cartItems, shippingAddress} = cart;


    const dispatch = useDispatch();

    const submitHandler = async (e:any) => {
        e.preventDefault();
        dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: {fullName, phone,email, paymentMethodHandler} })
        await router.push('/placeholder');
    }

    
    useEffect(() => {
        console.log(cartItems)

        if(cartItems.length == 0){
            router.push('/')
        }
    }, [router])
    
  return (
    <Layout title='Shipping'>
             <form className='form-shipping' onSubmit={submitHandler}>
                <img src={cartItems[0]?.image} alt="" />
                <h2>{cartItems[0]?.name}</h2>

                <label htmlFor="">Selecciona un metodo de pago</label>
                <label htmlFor="bancolombia" className='bank-input'>
                <input type="radio" name='paymentMethod' id='bancolombia' value="Bancolombia"  onChange={(e) => setPaymentMethodHandler(e.target.value) } />
                    <img src="/bancolombia.png" alt="" />
                    Bancolombia
                </label>
                <label htmlFor="mercadopago" className='bank-input'>
                <input type="radio" name='paymentMethod' id='mercadopago' value="MercadoPago"   onChange={(e) => setPaymentMethodHandler(e.target.value) }/>
                    <img src="/mercadopago.png" alt="" />
                    MercadoPago (T. Credito, Efecty )
                </label>
                <div className="info-inputs">
                <label className='label' htmlFor="">Informacion de contacto</label>

                <input type="text" placeholder='Nombre completo'     onChange={(e) => setFullName(e.target.value)} />
                <input type="text" placeholder='Numero telefonico '  onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='Correo electronico'  onChange={(e) => setEmail(e.target.value)} />
                <button className='btn-principal' type='submit' >ORDERNAR</button>
                </div>


            </form>
    </Layout>
  )
}

export default Shipping
