import React from "react";

export default React.createContext({
  cart: [],
  shoppingList: [],
  addProdToList: (text) => {},
  addProdToCart: (product) => {},
});
