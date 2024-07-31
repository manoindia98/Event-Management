import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";

// Define the state type
interface CartState {
  cart: Array<{ _id: string; price: number }>;
  total: number;
  totalItems: number;
}

const initialState: CartState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string) // Adding `as string` to ensure the type is correct
    : [],
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total") as string)
    : 0,
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems") as string)
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ _id: string; price: number }>) => {
      const course = action.payload;
      const index = state.cart.findIndex((item) => item._id === course._id);

    //   if (index >= 0) {
    //     toast.error("Course already in cart");
    //     return;
    //   }
      state.cart.push(course);
      state.totalItems++;
      state.total += course.price;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    //   toast.success("Course added to cart");
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      const index = state.cart.findIndex((item) => item._id === courseId);

      if (index >= 0) {
        state.totalItems--;
        state.total -= state.cart[index].price;
        state.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        // toast.success("Course removed from cart");
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      localStorage.removeItem("totalItems");
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
