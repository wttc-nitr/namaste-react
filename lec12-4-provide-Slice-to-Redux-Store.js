import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './lec12-3-creating-a-Slice'

const appStore = configureStore({
  /* reducer for the Redux-Store consists of slice-reducers */
  /* 'reducer' singular, as there is only one reducer for whole Redux-Store */
  reducer: {
    cart: CartSlice
  }
});

export default appStore;