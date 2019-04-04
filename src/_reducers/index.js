import { combineReducers } from "redux";
import tables from "./tables";
import { products } from "../app/products/reducers";

export default combineReducers({
  tables,
  products
});
