export const cartReducer = (state: any, action:any) => {
    switch (action.type) {
      case 'CART_ADD_ITEM':
        const item = action.payload;
        console.log(action.payload)
        const existItem:any = state.cart.cartItems.find((x:any) => x.product === item.product);
        if (existItem) {
          return {
            ...state,
            error: '',
            cartItems: state.cart.cartItems.map((x:any) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return { ...state, error: '', cartItems: [...state.cart.cartItems, item] };
        }
      case 'CART_REMOVE_ITEM':
        return {
          ...state,
          error: '',
          cartItems: state.cart.cartItems.filter((x:any) => x.product !== action.payload),
        };
      case 'CART_SAVE_SHIPPING_ADDRESS':
        return { ...state, shippingAddress: action.payload };
      case 'CART_SAVE_PAYMENT_METHOD':
        return { ...state, paymentMethod: action.payload };
      case 'CART_ADD_ITEM_FAIL':
        return { ...state, error: action.payload };
      case 'CART_EMPTY':
        return { ...state, error: '', cartItems: [] };
      default:
        return state;
    }
  };