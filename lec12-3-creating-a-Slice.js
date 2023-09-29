import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },

  /* 'reducers' plural, as there can be more than one for a Slice */
  reducers: {
    /* addItem -> Action, (state, action) => {} -> reducer function */
    addItem: (state, action) => {
      //we must mutate state in these fxn, that's the syntax of Redux-toolkit (or return a new state using return statement)

      state.items.push(action.payload);
    },

    /* removeItem -> Action, (state, action) => {} -> reducer function */
    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      /**
       * console.log(state) -> doesn't work
       * console.log(current(state)) -> works
       */

      // or return { items: [] }
      state.items.length = 0;
      /* arr.length = 0 => fastest way to clear an array, without changing the reference of 'arr' */
    }
  }
});

// redux-toolkit syntax
export const {addItem, removeItem, clearCart} = CartSlice.actions;

// 'reducer' singular, we're exporting 'a' combination of small 'reducers'
export default CartSlice.reducer;
