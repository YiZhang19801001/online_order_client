import { combineReducers } from "redux";
import tables from "./tables";
import { products } from "../app/products/reducers";
import { shoppingCartList, orderedList } from "../app/shoppingCart/reducers";

export default combineReducers({
  tables,
  products,
  shoppingCartList,
  orderedList
});
