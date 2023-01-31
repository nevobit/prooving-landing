import { createContext } from "react";

const GlobalContext = createContext({
    cartItems: [],
    shippingAddress: {},
    paymentMethod: "",
    setPaymentMethod: (paymentMethod: any) => {},
    setShippingAddress: (shippingAddress: any) => {},
    // getTotalItems: () => null,
    setCartItems: (cartItens: any) => {},
    // handleRemoveFromCart: () => null
})

export default GlobalContext;