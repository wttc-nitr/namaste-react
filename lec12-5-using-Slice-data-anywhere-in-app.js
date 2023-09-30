import { useSelector } from "react-redux"; 

const cartItems = useSelector((store) => store.cart.items); // cartItems is subscribed to 'items' in Cart-Slice

console.log(cartItems.length);