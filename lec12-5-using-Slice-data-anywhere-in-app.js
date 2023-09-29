import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);

console.log(cartItems.length);