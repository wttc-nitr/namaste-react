import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './lec12-3-creating-a-Slice'

const appStore = configureStore({
  /* reducer for the Redux-Store consists of slice-reducers */
  /* 'reducer' singular, as there is only one reducer for whole Redux-Store */
  reducer: {
    cart: cartReducer
  }
});

export default appStore;