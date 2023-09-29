import { useDispatch } from "react-redux";
import { addItem } from "./lec12-3-creating-a-Slice";

const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch an action

  // additem(state, action)
  dispatch(addItem(item)); // -> 'item' corresponds to 'action' in 'addItem(state, action)'
};

/**
 * items.map(item) {
 *  <button onClick={() => handleAddItem(item)}>
 * }
 */


/**
 * - build a Cart page
 * - show items added to the cart on Cart page (using ItemList component)
 * - add function to clear cart
 */