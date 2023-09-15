import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const storage = localStorage.getItem("cartItems");

const initialState = {
  cart: storage ? JSON.parse(storage) : [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cart = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCartItem = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cart = nextCartItem;
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart[itemIndex].cartQuantity += 1;
    },
    clearCart(state, action) {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    calculateTotal(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, cartQuantity } = item;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addToCart,
  removeFromCart,
  cartPlus,
  cartMinus,
  calculateTotal,
  clearCart,
  decreaseCart,
  increaseCart,
} = cartSlice.actions;

export default cartSlice.reducer;
