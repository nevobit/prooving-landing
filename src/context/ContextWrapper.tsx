import { useState } from "react";
import GlobalContext from "./GlobalContext"

const ContextWrapper = (props: any) => {
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState({});
    const [paymentMethod, setPaymentMethod] = useState("")

    return (
        <GlobalContext.Provider value={{cartItems, setCartItems, shippingAddress, setShippingAddress, paymentMethod, setPaymentMethod}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default ContextWrapper;